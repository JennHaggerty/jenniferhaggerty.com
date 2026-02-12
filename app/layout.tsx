import { site } from "@/src/site";
import "./globals.css";
import "./styles.css";
import { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Nav from "./components/Nav";
import { GoogleTagManager } from "@next/third-parties/google";

const exo2 = Exo_2({
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: site.meta.metaTitle,
  description: site.meta.metaDescription,
  keywords: site.meta.atsSeoKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = site.menus.find((x) => x.id === "portfolio");
  const iconMenu = site.menus.find((x) => x.id === "links-with-icons");

  return (
    <html lang="en">
      <body className={`${exo2.variable} antialiased`}>
        {menu && <Nav items={menu.items} />}

        <main
          className={`${site.maxWidthClassname} w-full m-auto px-3 md:px-0 min-h-screen align-center`}
        >
          {children}
        </main>

        <footer className="mt-[60px]">
          <h2 className="w-full!">Learn More</h2>

          {iconMenu && (
            <Nav
              id={iconMenu.id}
              items={iconMenu.items}
              customClassname={`${iconMenu.customClass}`}
            />
          )}
        </footer>
      </body>
      <GoogleTagManager gtmId="G-7CWF8DMRPZ" />
    </html>
  );
}
