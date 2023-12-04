"use client";

import React, { useState, useEffect } from "react";

const ResumePDF: React.FC = () => {
  const pdfUrl: string = "/Ruperto's Resume.pdf";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`relative xl:w-1/2 md:w-2/3 md:w-4/5 md:h-4/5 rounded-md shadow-md overflow-hidden ${
        isMobile ? "w-[300px] h-[400px]" : "w-full h-full"
      }`}
      style={{ margin: "-5rem 0 0" }}
    >
      <div
        className={`absolute inset-0 ${
          isMobile ? "" : "border-2 border-gray-300"
        }`}
      >
        {isMobile ? (
          <img
            src={"/Resume.png"}
            alt="Resume"
            className="w-full h-full object-fill border-0.375rem"
          />
        ) : (
          <embed
            src={pdfUrl + "#navpanes=0&messages=0&toolbar=0"}
            type="application/pdf"
            className="w-full h-full border-0.375rem"
          />
        )}
      </div>
    </div>
  );
};

export default ResumePDF;
