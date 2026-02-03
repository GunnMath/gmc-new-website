import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
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
      {/* suppressHydrationWarning fixes errors caused by extensions like Grammarly */}
      <body className={libre.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}