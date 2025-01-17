import type { Metadata } from "next";
import { Nunito } from "next/font/google"
import "./globals.css";

import Navbar from "./navbar/Navbar";

const font = Nunito({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Shoes-App",
  description: "Shoes Store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
