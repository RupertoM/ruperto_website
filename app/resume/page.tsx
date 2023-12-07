import React from "react";
import ResumePDF from "../components/resume";

export default function Resume() {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
      <div className="flex items-center justify-center w-full h-full">
        <ResumePDF />
      </div>
    </div>
  );
}
