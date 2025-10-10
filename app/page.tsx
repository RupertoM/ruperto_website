"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import Particles from "./components/Particles";
import TypingText from "./components/TypingText";

export default function Home() {
  const controls = useAnimationControls();

  React.useEffect(() => {
    const startAnimations = async () => {
      await controls.start("visible");
    };

    startAnimations();
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-bl from-black via-slate-500/25 to-black">
      <motion.h1
        className="text-4xl text-white mb-8 font-display sm:text-2xl md:text-4xl font-bold"
        variants={{
          hidden: { x: "100vw" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2.5 }}
      >
        Ruperto Martinez
      </motion.h1>
      <Particles className="absolute inset-0 -z-10" amount={100} />
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 4, delay: 3 }}
        className="mb-8"
      >
        <Image
          src="/personal_photo.png"
          alt="Profile Picture"
          width={160}
          height={160}
          className="rounded-full w-40 h-40 object-cover"
        />
      </motion.div>
      <motion.div
        className="z-10 text-center"
        variants={{
          hidden: { x: "-100vw" },
          visible: { x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 2, delay: 1 }}
      >
        <h2 className="flex items-center justify-center mx-2 text-lg text-neutral-100">
          <TypingText />
        </h2>
      </motion.div>
    </div>
  );
}
