import { Metadata } from "next";
import { Dancing_Script, Space_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BackIcon from "./components/BackIcon";

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Ruperto Martinez | Full Stack Developer",
    template: "%s | Ruperto Martinez",
  },
  description:
    "Full Stack Developer and Computer Science student at UNC Chapel Hill. Passionate about innovative technology solutions, AI, and web development.",
  keywords: [
    "Ruperto Martinez",
    "Full Stack Developer",
    "UNC Chapel Hill",
    "Computer Science",
    "Web Development",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ruperto Martinez" }],
  creator: "Ruperto Martinez",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ruperto Martinez Portfolio",
    title: "Ruperto Martinez | Full Stack Developer",
    description:
      "Full Stack Developer and Computer Science student at UNC Chapel Hill. Passionate about innovative technology solutions, AI, and web development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruperto Martinez | Full Stack Developer",
    description:
      "Full Stack Developer and Computer Science student at UNC Chapel Hill.",
  },
  icons: {
    icon: "/icon.ico",
  },
  metadataBase: new URL("https://rupertomartinez.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dancingScript.variable} ${spaceMono.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body className="bg-black" suppressHydrationWarning>
        <BackIcon />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
