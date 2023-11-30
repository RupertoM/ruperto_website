"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 md:absolute md:top-2 md:right-10 md:mt-6 md:mr-6 md:left-auto md:transform-none">
      <ul className="flex items-left justify-left gap-4">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            passHref
            className={`text-base text-zinc-200 hover:text-zinc-100 hover:text-white hover:font-bold transition-all duration-250 ease-in-out 
            ${
              pathname === item.href
                ? "font-bold underline decoration-2 decoration-slate-200 underline-offset-8"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
