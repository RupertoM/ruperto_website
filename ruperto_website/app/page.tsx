import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <h1 className="z-10 text-2xl text-white mb-8 font-display sm:text-4xl md:text-6xl">
        Ruperto Martinez
      </h1>
      <h2 className="text-sm text-zinc-500 mt-2">
        Software Engineer, Full Stack Developer, Student at the University of
        North Carolina
      </h2>
    </div>
  );
}
