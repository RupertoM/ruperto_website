import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import TypingText from "./components/TypingText";

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-bl from-black via-slate-500/25 to-black">
      <nav className="my-6">
        <ul className="flex items-center justify-center gap-4">
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
      <Particles className="absolute inset-0 -z-10" amount={75} />
      <h1 className="z-10 text-2xl text-white mb-8 font-display sm:text-4xl md:text-6xl font-bold">
        Ruperto Martinez
      </h1>

      <h2 className="text-base text-neutral-400 mt-2">
        <TypingText />
      </h2>
    </div>
  );
}
