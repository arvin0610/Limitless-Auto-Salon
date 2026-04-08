import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Limitless Auto Salon | Ceramic Coating, PPF & Paint Correction | Chatsworth, CA",
  description: "Certified coating and PPF studio in Chatsworth, CA. Professional detailing, paint correction, and long-term protection.",
  icons: { icon: "/images/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
