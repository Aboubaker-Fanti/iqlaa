import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iqlaa - quit today, live tomorrow",
  description: "Iqlaa is a youth-focused initiative designed to help individuals\
   break free from smoking addiction through engaging activities,\
    expert guidance, and personalized support. Our platform offers psychological\
     assessments, motivational resources, one-on-one doctor consultations,\
      and interactive sessions to empower users on their journey to quitting.\
       Take control of your health and start your smoke-free\
        transformation with Iqlaa today!",
  keywords: ["smoking addiction", "quit smoking", "youth health", "smoking cessation", "nicotine recovery", "smoke-free life"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
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
