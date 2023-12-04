"use client";

import React from "react";

const ResumePDF: React.FC = () => {
  const pdfUrl: string = "/Ruperto's Resume.pdf";

  return (
    <div
      className="xl:w-1/2 md:w-2/3 w-4/5 h-4/5 rounded-md shadow-md"
      style={{ margin: "-5rem 0 0" }}
    >
      <embed
        src={pdfUrl + "#navpanes=0&messages=0"}
        type="application/pdf"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0.375rem",
        }}
      />
    </div>
  );
};

export default ResumePDF;
