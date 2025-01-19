import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Easy Appointment",
  description: "Easy Appointment provides the facility to book doctor appointment in a few clicks along with online consultation",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-custom-white dark:bg-bg-dark`}
      >
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
