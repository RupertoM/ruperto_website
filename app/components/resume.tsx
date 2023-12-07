"use client";

import React, { useState, useEffect } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ResumePDF: React.FC = () => {
  const pdfUrl: string = "/Ruperto's Resume.pdf";
  const [isMobile, setIsMobile] = useState(false);
  const [downloadState, setDownloadState] = useState<
    "idle" | "downloading" | "done"
  >("idle");

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

  const handleDownload = () => {
    setDownloadState("downloading");

    // Simulate download delay
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Rupertos_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState("done");
    }, 1500);
  };

  return (
    <div
      className={`relative xl:w-1/2 md:w-2/3 md:w-4/5 md:h-4/5 rounded-md shadow-md overflow-hidden ${
        isMobile ? "w-[300px] h-[400px]" : "w-full h-full"
      }`}
      style={{ margin: "4rem 0 0" }}
    >
      <div
        className={`absolute inset-0 ${
          isMobile ? "" : "border-2 border-gray-300"
        }`}
      >
        {isMobile ? (
          <>
            <img
              src={"/Resume.png"}
              alt="Resume"
              className="w-full h-full object-fill border-0.375rem"
            />
            {downloadState === "idle" && (
              <div className="absolute bottom-0 right-0 text-sky-500 p-2 rounded cursor-pointer">
                <GetAppIcon onClick={handleDownload} />
              </div>
            )}
            {downloadState === "downloading" && (
              <div className="absolute bottom-0 right-0 text-blue-500 p-2 rounded">
                <CircularProgress size={24} thickness={4} />
              </div>
            )}
            {downloadState === "done" && (
              <div className="absolute bottom-0 right-0 text-green-500 p-2 rounded">
                <CheckCircleIcon />
              </div>
            )}
          </>
        ) : (
          <>
            <embed
              src={pdfUrl + "#navpanes=0&messages=0&toolbar=0"}
              type="application/pdf"
              className="w-full h-full border-0.375rem"
            />
            {downloadState === "idle" && (
              <button
                className="absolute bottom-4 right-4 text-stone-800 p-2 rounded cursor-pointer hover:text-blue-500 hover:text-lg"
                onClick={handleDownload}
              >
                <GetAppIcon />
              </button>
            )}
            {downloadState === "downloading" && (
              <div className="absolute bottom-4 right-4 text-stone-800 p-2 rounded">
                <CircularProgress size={24} thickness={4} />
              </div>
            )}
            {downloadState === "done" && (
              <div className="absolute bottom-4 right-4 text-green-500 p-2 rounded">
                <CheckCircleIcon />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResumePDF;
