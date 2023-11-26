import { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
