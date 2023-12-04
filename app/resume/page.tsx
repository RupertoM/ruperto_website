import React from "react";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ResumePDF from "../components/resume";

export default function Resume() {
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
      <div className="flex items-center justify-center w-full h-full">
        <ResumePDF />
      </div>
    </div>
  );
}
