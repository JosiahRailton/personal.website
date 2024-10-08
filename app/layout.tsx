import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josiah Railton",
  description: "Josiah Railton Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="page">
          <div id="non-footer-content">
            <Header></Header>
            {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
