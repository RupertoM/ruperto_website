import { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import BackIcon from "./components/backIcon";

export const metadata: Metadata = {
  title: "Ruperto's Portfolio",
  description: "Developed by Ruperto Martinez",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <BackIcon></BackIcon>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
