import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Legality Panama",
  description: "Generated by Adrien Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative md:px-40">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
