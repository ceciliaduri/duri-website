import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Duri Trading",
  description: "",
  icons: {
    icon: "/favicon.ico",
  }
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-screen h-screen overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
