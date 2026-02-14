import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gunn Math Competition",
  description: "Fifth annual math competition organized by Gunn High School students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Mont Font globally */}
        <link href="https://fonts.cdnfonts.com/css/mont" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}