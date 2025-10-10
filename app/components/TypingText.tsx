"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingText: React.FC = () => {
  const typedRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const defaultStrings = [
      "Ruperto Martinez.",
      "a Full Stack Developer with expertise in innovative solutions.",
      "a student at the University of North Carolina deeply immersed in Computer Science.",
      "a tech enthusiast constantly pushing the boundaries of knowledge and always aspiring to learn.",
      "passionate about my faith, technology, volleyball, and those around me.",
      "analytical, collaborative, innovative, and motivated, looking to make a difference in my community.",
    ];

    const options = {
      strings: defaultStrings,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 3000,
      startDelay: 1200,
      showCursor: true,
      loop: true,
      loopCount: Infinity,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div>
      I am <span ref={typedRef}></span>
    </div>
  );
};

export default TypingText;
