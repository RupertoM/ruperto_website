"use client";

import React from "react";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { usePathname } from "next/navigation";

const BackIcon: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return !isHomePage ? (
    <div className="absolute">
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
    </div>
  ) : null;
};

export default BackIcon;
