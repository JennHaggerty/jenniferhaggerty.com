import { site } from "@/src/site.js";
import "./index.css";
import { Metadata } from "next";
import Nav from "./components/Nav.tsx";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
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
      <body className={`antialiased`}>
        {menu && <Nav items={menu.items} />}

        <main
          className={`${site.maxWidthClassname} m-auto px-3 min-h-screen align-center`}
        >
          {children}
        </main>

        <footer className="mb-[-48px] mt-[60px]">
          <h2 className="h2 w-full! mb-0! flex justify-center">Learn More</h2>

          {iconMenu && (
            <Nav
              id={iconMenu.id}
              items={iconMenu.items}
              customClassname={`${iconMenu.customClass}`}
            />
          )}
        </footer>
      </body>
    </html>
  );
}
