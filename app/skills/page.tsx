// Skills.tsx
import React from "react";
import Logo from "../components/logo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const Skills: React.FC = () => {
  const languages = [
    { title: "Python", imgSrc: "/Python.svg", altText: "Python Logo" },
    { title: "Java", imgSrc: "/Java.svg", altText: "Java Logo" },
    { title: "Javascript", imgSrc: "/JS.svg", altText: "Javascript Logo" },
    { title: "Typescript", imgSrc: "/TS.svg", altText: "TypeScript Logo" },
    { title: "C", imgSrc: "/C.svg", altText: "C Logo" },
    { title: "MatLab", imgSrc: "/MatLab.png", altText: "MatLab Logo" },
    { title: "HTML5", imgSrc: "/HTML5.svg", altText: "HTML5 Logo" },
    { title: "CSS", imgSrc: "/CSS3.svg", altText: "CSS Logo" },
  ];
  const libraries = [
    { title: "SQL", imgSrc: "/SQL.svg", altText: "SQL Logo" },
    { title: "NoSQL", imgSrc: "/NoSQL.png", altText: "NoSQL Logo" },
    { title: "React", imgSrc: "/React.svg", altText: "React Logo" },
    { title: "Angular", imgSrc: "/Angular.svg", altText: "Angular Logo" },
    { title: "Spring Boot", imgSrc: "/Spring.svg", altText: "Spring Logo" },
    { title: "NextJS", imgSrc: "/NextJS.svg", altText: "NextJS Logo" },
    { title: "NodeJS", imgSrc: "/NodeJS.svg", altText: "NodeJS Logo" },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
      <Link href="/">
        <KeyboardBackspaceIcon
          style={{
            fontSize: 40,
            color: "white",
            marginLeft: "2.5rem",
            marginTop: "1.25rem",
          }}
        />
      </Link>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl text-white mt-5 mx-auto font-display sm:text-2xl md:text-5xl">
          <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.400),theme(colors.zinc.100),theme(colors.zinc.400),theme(colors.zinc.100),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">
            PROGRAMMING STACK
          </p>
        </h1>
      </div>
      <div className="languages-logo-div font-mono font-extrabold flex flex-row mt-20 items-start justify-center w-screen overflow-hidden">
        <div className="text-center">
          <h5 className="text-xl mb-4">Spanish</h5>
          <img
            src="/PR.svg"
            alt="Puerto Rican Flag"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        {languages.map((logo, index) => (
          <Logo
            className="object-contain mx-auto w-20 h-20 text-center"
            key={index}
            {...logo}
          />
        ))}
      </div>
      <div className="libraries-logo-div font-mono font-extrabold flex flex-row mt-20 items-start justify-center w-screen overflow-hidden">
        {libraries.map((logo, index) => (
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
