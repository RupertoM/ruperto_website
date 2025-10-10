import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interests",
  description:
    "Discover Ruperto Martinez's personal interests including faith, volleyball, technology, and adventures. Explore photo galleries and learn about his passions.",
};

export default function InterestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
