import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Ruperto Martinez's professional experience, technical skills, and relevant coursework in Computer Science and Full Stack Development.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
