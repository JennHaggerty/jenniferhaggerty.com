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
    <div
      className={`${montserratSans.variable} ${cormorantSerif.variable} antialiased`}
    >
      {children}
      <Footer />
    </div>
  );
}
