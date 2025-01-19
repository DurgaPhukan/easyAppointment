import type { Metadata } from "next";
import "./globals.css";


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
      <body className="">
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
