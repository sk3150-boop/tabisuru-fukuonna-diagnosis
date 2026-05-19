import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { chromium } from "@playwright/test";

const port = 3100;
const baseUrl = `http://127.0.0.1:${port}`;
const screenshotDir = "verification";

if (!existsSync(screenshotDir)) {
  mkdirSync(screenshotDir);
}

const server = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
  {
    cwd: process.cwd(),
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  },
);

const waitForServer = async () => {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < 30_000) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return;
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw lastError ?? new Error("Timed out waiting for dev server");
};

try {
  await waitForServer();

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  await page.goto(baseUrl);
  await page.screenshot({ path: `${screenshotDir}/top-mobile.png`, fullPage: true });
  await page.getByTestId("start-diagnosis").click();
  await page.getByText("あなたが旅に求めること", { exact: true }).waitFor();
  await page.screenshot({ path: `${screenshotDir}/question-mobile.png`, fullPage: true });

  const answerSteps = [
    ["food"],
    ["gourmet"],
    ["short"],
    ["under100k"],
    ["solo"],
    ["female30"],
    ["language"],
    ["first", "firstTrip"],
    ["longFlight"],
    ["value"],
  ];

  for (const [stepIndex, answerIds] of answerSteps.entries()) {
    for (const answerId of answerIds) {
      await page.getByTestId(`answer-${answerId}`).click();
    }
    if (stepIndex === 7) {
      await page.screenshot({ path: `${screenshotDir}/question8-mobile.png`, fullPage: true });
    }
    await page.getByTestId("next-button").click();
  }

  await page.getByText("あなたに合いそうな海外旅行先はこちら", { exact: true }).waitFor();
  await page.getByText("あなたに一番おすすめ", { exact: true }).waitFor();
  await page.getByTestId("affiliate-hotel").first().waitFor();
  await page.waitForFunction(() =>
    Array.from(document.querySelectorAll("article .destination-photo")).slice(0, 3).every(
      (image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
    ),
  );
  await page.screenshot({ path: `${screenshotDir}/results-mobile.png`, fullPage: true });

  await page.getByTestId("restart-diagnosis").click();
  await page.getByText("あなたが旅に求めること", { exact: true }).waitFor();

  await browser.close();
  console.log("Verified top screen, question flow, results screen, restart button, and affiliate buttons.");
} finally {
  server.kill();
}
