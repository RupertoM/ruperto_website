"use client";

import React, { useEffect, useState } from "react";

interface LogoProps {
  title: string;
  imgSrc: string;
  altText: string;
  className: string;
  isContain?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  title,
  imgSrc,
  altText,
  isContain = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? (
    <div className="text-center ml-2 mr-2">
      <h5 className="text-lg text-white mb-2 md:mb-4">{title}</h5>
      <img
        src={imgSrc}
        alt={altText}
        className={`w-6 h-6 md:w-20 md:h-20 mb-5 md:mb-10 md:transition-transform md:transform-gpu md:hover:scale-125 ${
          isContain ? "object-contain" : "object-cover"
        } mx-auto`}
      />
    </div>
  ) : (
    <div className="text-center ml-5 mr-5">
      <h5 className="text-xl text-white mb-2 md:mb-4">{title}</h5>
      <img
        src={imgSrc}
        alt={altText}
        className={`w-10 h-10 md:w-20 md:h-20 mb-5 md:mb-10 md:transition-transform md:transform-gpu md:hover:scale-125 ${
          isContain ? "object-contain" : "object-cover"
        } mx-auto`}
      />
    </div>
  );
};

export default Logo;
