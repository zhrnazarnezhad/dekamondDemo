import type { Metadata } from "next";
import localFont from "next/font/local";

import { AuthProvider } from "@/components/providers/authProvider";
import "./globals.scss";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/YekanBakhFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/YekanBakhFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/YekanBakhFaNum-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-yekanBakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Authentication App",
  description: "A simple authentication app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className} font-sans h-screen w-screen`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
