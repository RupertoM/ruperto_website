import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download Ruperto Martinez's professional resume showcasing his experience as a Full Stack Developer and Computer Science student.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
