"use client";

import { useEffect } from "react";
import Script from "next/script";
import { analytics } from "@/config/site";
import { captureAttribution } from "@/lib/tracking";

/*
 * Injects GA4 + Meta Pixel and snapshots ad attribution on arrival.
 *
 * Both tags are omitted entirely when their env var is unset, so local dev and
 * previews stay clean and no half-configured tag ever ships.
 */
export function Analytics() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return (
    <>
      {analytics.ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analytics.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${analytics.ga4Id}');`}
          </Script>
        </>
      )}

      {analytics.metaPixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${analytics.metaPixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${analytics.metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}
    </>
  );
}
