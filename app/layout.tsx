import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ruperto's Portfolio",
  description: "Developed by Ruperto Martinez",
  icons: {
    icon: "/favicon.ico",
  },
};

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="absolute top-10 md:absolute md:top-2 md:right-10 md:mt-6 md:mr-6">
          <ul className="flex items-left justify-left gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-neutral-400 hover:text-neutral-200"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
