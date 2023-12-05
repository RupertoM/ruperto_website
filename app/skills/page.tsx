import React from "react";
import Logo from "../components/logo";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const Skills: React.FC = () => {
  const languages = [
    {
      title: "Spanish",
      imgSrc: "/PR.svg",
      altText: "Spanish Logo",
      isContain: true,
    },
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
            marginLeft: "1.5rem",
            marginTop: "1.25rem",
          }}
        />
      </Link>
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-2xl text-white mt-20 mx-auto font-display sm:text-3xl md:text-5xl md:mt-5">
          <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.400),theme(colors.zinc.100),theme(colors.zinc.400),theme(colors.zinc.100),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">
            PROGRAMMING STACK
          </p>
        </h1>
      </div>
      <div className="logos-container font-mono font-extrabold flex flex-wrap justify-center items-start mt-10 md:mt-20 overflow-hidden">
        <div className="w-full flex flex-wrap justify-center">
          {languages.map((logo, index) => (
            <Logo
              className="object-contain mx-auto w-20 h-20 text-center mb-8"
              key={index}
              {...logo}
            />
          ))}
        </div>

        <div className="w-full flex flex-wrap justify-center">
          {libraries.map((logo, index) => (
            <Logo
              className="object-contain mx-auto w-20 h-20 text-center mb-8"
              key={index}
              {...logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
