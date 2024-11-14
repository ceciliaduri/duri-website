import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duri Trading",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
