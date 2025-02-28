import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const workSans = localFont({
  src: [
    { path: "/fonts/WorkSans-Regular.ttf", weight: "400", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "TenTwenty",
  description: "From Our Farms to Your Hands",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
