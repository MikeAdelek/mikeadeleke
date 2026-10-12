import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mike Adeleke | Technical Project Manager",
  description: "Technical Project Manager with a frontend engineering background. Scope, sprints, stakeholders and delivery for web products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}        
      </body>
    </html>
  );
}
