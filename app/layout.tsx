import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

// 1. Import Fira Code
const fira = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Gunn Math Competition",
  description: "Annual math competition organized by Gunn High School students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 2. Apply Fira Code class to the body */}
      <body className={fira.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}