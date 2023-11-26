// Skills.tsx
import React from "react";
import Logo from "../components/logo";

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
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-bl from-slate-500/20 via-slate-500/25 to-slate-500/20">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-2xl text-white ml-10 mt-10 font-display sm:text-4xl md:text-6xl font-bold">
          LANGUAGES AND LIBRARIES
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start mt-10 w-screen h-screen overflow-hidden">
        <div className="text-center ml-10">
          <h5 className="text-xl mb-4">Spanish</h5>
          <img
            src="/PR.svg"
            alt="Puerto Rican Flag"
            className="w-20 h-20 object-contain mx-auto"
          />
        </div>
        {logos.map((logo, index) => (
          <Logo key={index} {...logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
