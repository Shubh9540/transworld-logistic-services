import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Transworld Logistics Services",
  description: "Transworld Logistics Services",
  icons: {
    icon: '/main logo/header-logo.png',
    shortcut: '/main logo/header-logo.png',
    apple: '/main logo/header-logo.png',
  },
};

import { CustomCursor } from "@/components/common/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
