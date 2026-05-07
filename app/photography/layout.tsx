import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const montserratSans = Montserrat({
  variable: "--font-sans",
});

const cormorantSerif = Cormorant_Garamond({
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.variable} ${cormorantSerif.variable} antialiased`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
