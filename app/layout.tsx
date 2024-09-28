import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./ui/nav-main";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-primaryA text-white overflow-x-hidden`}>
        <header className="container">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
