import React from "react";
import Logo from "../components/logo";

const Experience: React.FC = () => {
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
    {
      title: "NodeJS",
      imgSrc: "/NodeJS.svg",
      altText: "NodeJS Logo",
      isContain: true,
    },
  ];

  const devStack = [
    { title: "OpenShift", imgSrc: "/OpenShift.png", altText: "OpenShift Logo" },
    {
      title: "Kubernetes",
      imgSrc: "/Kubernetes.png",
      altText: "GKE Logo",
    },
    {
      title: "Docker",
      imgSrc: "/Docker.png",
      altText: "Docker Logo",
      isContain: true,
    },
    { title: "Material UI", imgSrc: "/MUI.png", altText: "MUI Logo" },
    { title: "VS Code", imgSrc: "/VSCode.svg", altText: "VSCode Logo" },
    { title: "IntelliJ", imgSrc: "/IntelliJ.png", altText: "IntelliJ Logo" },
    { title: "CLI", imgSrc: "/CLI.svg", altText: "CLI Logo" },
  ];

  const devStack2 = [
    {
      title: "GitHub",
      imgSrc: "/GitHub.png",
      altText: "GitHub Logo",
      isContain: true,
    },
    {
      title: "Google Cloud",
      imgSrc: "/GCP.png",
      altText: "GCP Logo",
      isContain: true,
    },
    {
      title: "Confluence",
      imgSrc: "/confluence.svg",
      altText: "Confluence Logo",
    },
    { title: "Jira", imgSrc: "/jira.svg", altText: "Jira Logo" },
    { title: "VertexAI", imgSrc: "/vertexai.svg", altText: "VertexAI Logo" },
    { title: "ChatGPT", imgSrc: "/chatgpt.png", altText: "ChatGPT Logo" },
    {
      title: "GitHub Actions",
      imgSrc: "/GitHub-Actions.png",
      altText: "GitHub Actions Logo",
    },
  ];

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <div className="snap-center w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl text-white mt-28 mb-5 mx-auto font-display sm:text-3xl md:text-5xl md:mt-20 md:mb-0">
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

      <div className="snap-center w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl text-white mt-28 mb-5 mx-auto font-display sm:text-3xl md:text-5xl md:mt-20 md:mb-0">
            <p className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.stone.400),theme(colors.zinc.100),theme(colors.zinc.400),theme(colors.zinc.100),theme(colors.stone.400))] bg-[length:200%_auto] animate-gradient">
              DEVELOPMENT STACK
            </p>
          </h1>
        </div>
        <div className="logos-container font-mono font-extrabold flex flex-wrap justify-center items-start mt-10 md:mt-20 overflow-hidden">
          <div className="w-full flex flex-wrap justify-center">
            {devStack.map((logo, index) => (
              <Logo
                className="object-contain mx-auto w-20 h-20 text-center mb-8"
                key={index}
                {...logo}
              />
            ))}
          </div>
          <div className="w-full flex flex-wrap justify-center">
            {devStack2.map((logo, index) => (
              <Logo
                className="object-contain mx-auto w-20 h-20 text-center mb-8"
                key={index}
                {...logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
