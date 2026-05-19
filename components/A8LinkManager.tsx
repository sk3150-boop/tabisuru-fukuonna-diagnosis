"use client";

import Script from "next/script";

const A8_LINK_MANAGER_CONFIG_ID = "u2tatrxUafSa7GxOBEpu";

export function A8LinkManager() {
  return (
    <>
      <Script src="https://statics.a8.net/a8link/a8linkmgr.js" strategy="afterInteractive" />
      <Script id="a8-link-manager" strategy="afterInteractive">
        {`
          if (typeof window !== "undefined" && typeof window.a8linkmgr === "function") {
            window.a8linkmgr({
              "config_id": "${A8_LINK_MANAGER_CONFIG_ID}"
            });
          }
        `}
      </Script>
    </>
  );
}
