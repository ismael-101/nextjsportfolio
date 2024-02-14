import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/main/Nav";
import Hydrate from "@/components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismael Ali",
  description: "Ismael Ali is a web developer ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hydrate>
        <body className={`${inter.className}`}>
          <Nav />
          {children}
        </body>
      </Hydrate>
    </html>
  );
}
