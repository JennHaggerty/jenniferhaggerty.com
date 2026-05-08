import "./globals.css";
import "./styles.css";
import { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const exo2 = Exo_2({
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Photographer & web developer in Georgia | Jennifer Haggerty | 30901",
  description:
    "Jennifer provides fine art photography and front-end web development. She lives in and works out of Augusta, GA.",
  keywords:
    "photographer, artist, art, photography, web developer, front end developer, frontend developer, web development, javaScript developer, PHP developer, React developer, TypeScript developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
      <GoogleTagManager gtmId="GTM-N4K289BV" />
      <GoogleAnalytics gaId="G-7CWF8DMRPZ" />
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
