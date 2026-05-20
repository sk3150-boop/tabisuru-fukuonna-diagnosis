import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const targets = ["README.md", "app", "components", "data", "lib", "types"];
const textExtensions = new Set([".css", ".json", ".md", ".ts", ".tsx"]);
const ignoredDirs = new Set([".git", ".next", "node_modules", "verification"]);

const suspiciousPattern =
  /\uFFFD|\u7E5D|\u8B41|\u7E3A|\u83A0|\u9015|\u8B0C|\u873F|\u87C6|\u9695|\u9AEE|\u9B06|\u8373|\u8B5B|\u96CE|\u8C4C|\u8C6C|\u8C41|\u8763|\u9B27|\u8782|\u901B|\u8AE2|\u8737|\u86F9|\uF8F0/u;

function collectFiles(target) {
  const stats = statSync(target);

  if (stats.isFile()) {
    return textExtensions.has(extname(target)) ? [target] : [];
  }

  return readdirSync(target).flatMap((entry) => {
    if (ignoredDirs.has(entry)) {
      return [];
    }

    return collectFiles(join(target, entry));
  });
}

const findings = [];

for (const file of targets.flatMap(collectFiles)) {
  const lines = readFileSync(file, "utf8").split(/\r?\n/);

  lines.forEach((line, index) => {
    if (suspiciousPattern.test(line)) {
      findings.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (findings.length > 0) {
  console.error("文字化けの疑いがある文字列が見つかりました。");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("文字化けの疑いがある文字列は見つかりませんでした。");
