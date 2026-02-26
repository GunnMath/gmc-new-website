import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

// Configure your local Mont fonts and CREATE A CSS VARIABLE
const mont = localFont({
  src: [
    {
      path: './fonts/Mont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Mont-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Mont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Mont-Black.woff2',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-mont', // THIS IS CRITICAL
});

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
    <html lang="en" className={`${mont.variable}`}>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}