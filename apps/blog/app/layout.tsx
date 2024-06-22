import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { ClarityScript } from "~/app/script/clarity.script";
import { ENVIRONMENT } from "~/shared/environment";
import { AUTHOR_NAME, BASE_SITE_DESCRIPTION, BASE_SITE_TITLE, BASE_SITE_URL } from "../src/shared/constants";
import { createMetadata } from "../src/shared/utils/external/create-meta-data";
import AutoRefresh from "./auto-refresh";

const notoSansKr = Noto_Sans_KR({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    authors: AUTHOR_NAME,
    description: BASE_SITE_DESCRIPTION,
    title: BASE_SITE_TITLE,
    url: BASE_SITE_URL,
  }),
  verification: {
    google: ENVIRONMENT.GSC_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <AutoRefresh>
    <html lang="ko" className={notoSansKr.className}>
      <body>{children}</body>
      <ClarityScript />
      <GoogleTagManager gtmId={ENVIRONMENT.GTM_ID} />
      <GoogleAnalytics gaId={ENVIRONMENT.GA_ID} />
    </html>
    // </AutoRefresh>
  );
}
