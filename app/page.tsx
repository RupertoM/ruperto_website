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
      <h1 className="text-xl text-white mb-8 font-display sm:text-2xl md:text-4xl font-bold">
        Ruperto Martinez
      </h1>
      <Particles className="absolute inset-0 -z-10" amount={75} />
      <div>
        <img
          src="/personal_photo.png"
          alt="Profile Picture"
          className="rounded-full w-40 h-40 object-cover mb-8"
        />
      </div>
      <div className="z-10 text-center">
        <h2 className="flex items-center justify-center mx-2 text-base text-neutral-400">
          <TypingText />
        </h2>
      </div>
    </div>
  );
}
