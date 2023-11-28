// Skills.tsx
import React from "react";
import Logo from "../components/logo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const Skills: React.FC = () => {
  const logos = [
    { title: "Python", imgSrc: "/Python.svg", altText: "Python Logo" },
    { title: "Java", imgSrc: "/Java.svg", altText: "Java Logo" },
    { title: "Javascript", imgSrc: "/JS.svg", altText: "Javascript Logo" },
    {
      title: "Typescript",
      imgSrc: "/TypeScript.svg",
      altText: "TypeScript Logo",
    },
    { title: "C", imgSrc: "/C.svg", altText: "C Logo" },
    { title: "MatLab", imgSrc: "/MatLab.png", altText: "MatLab Logo" },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
      <Link href="/">
        <KeyboardBackspaceIcon
          style={{
            fontSize: 40,
            color: "white",
            marginLeft: 40,
            marginTop: 25,
          }}
        />
      </Link>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl text-white mt-5 mx-auto font-display sm:text-2xl md:text-5xl">
          <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.400),theme(colors.zinc.100),theme(colors.zinc.400),theme(colors.zinc.100),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">
            LANGUAGES AND LIBRARIES
          </p>
        </h1>
      </div>
      <div className="flex flex-row mt-20 items-start justify-center w-screen h-screen overflow-hidden">
        <div className="text-center">
          <h5 className="text-xl mb-4">Spanish</h5>
          <img
            src="/PR.svg"
            alt="Puerto Rican Flag"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        {logos.map((logo, index) => (
          <Logo
            className="object-contain mx-auto w-20 h-20 text-center"
            key={index}
            {...logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
