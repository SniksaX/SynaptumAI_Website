// utils/GoogleAnalytics.tsx
import Script from "next/script";
import React, { FC } from "react";

interface Props {
  trackingId: string;
}

const GoogleAnalytics: FC<Props> = ({ trackingId }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
