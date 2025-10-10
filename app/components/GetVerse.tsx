"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

interface VerseResponse {
  verse?: {
    details?: {
      text?: string;
      reference?: string;
    };
  };
}

export const VerseOfTheDay: React.FC = () => {
  const [verseData, setVerseData] = useState({
    text: "",
    reference: "",
  });

  const fetchVerseOfTheDay = async () => {
    const options = {
      method: "GET",
      headers: { accept: "application/json" },
    };

    try {
      const response = await fetch(
        //Change the end of the url to (/get?format=json&order=daily) for verse of the day
        "https://beta.ourmanna.com/api/v1/get?format=json&order=random",
        options
      );
      const data = await response.json() as VerseResponse;

      const verseDetails = data?.verse?.details;

      setVerseData({
        text:
          verseDetails?.text ||
          "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: verseDetails?.reference || "Proverbs 3:5",
      });
    } catch (err) {
      console.error(err);
      setVerseData({
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5",
      });
    }
  };

  useEffect(() => {
    fetchVerseOfTheDay();
  }, []);

  const handleGenerateNewVerse = () => {
    fetchVerseOfTheDay();
  };

  return (
    <div>
      <h1 className="text-md md:text-2xl font-bold mb-1 md:mb-4">
        {verseData.reference}
      </h1>
      <p className="text-sm md:text-base">{verseData.text}</p>

      <Button
        variant="outlined"
        sx={{
          marginTop: "0.5rem",
          "@media (min-width: 768px)": {
            marginTop: "1.5rem",
          },
          transition:
            "color 300ms ease-in-out, background-color 300ms ease-in-out",
          "&:hover": {
            color: "black",
            backgroundColor: "white",
            borderColor: "white",
            outline: "none",
          },
          color: "white",
          borderColor: "white",
        }}
        onClick={handleGenerateNewVerse}
      >
        Generate New Verse
      </Button>
    </div>
  );
};
