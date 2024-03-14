import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gunn Math Competition",
  description: "Join us at Gunn High School on March 24th to compete for prizes in teams of 4!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre.className}>
        {children}
      </body>
    </html>
  );
}
