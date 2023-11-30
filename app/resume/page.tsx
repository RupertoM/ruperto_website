import React from "react";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

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
      <div className="flex flex-col items-start justify-start"></div>
    </div>
  );
}
