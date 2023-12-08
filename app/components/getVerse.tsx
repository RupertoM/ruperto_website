"use client";

import React, { useEffect, useState } from "react";

export const VerseOfTheDay: React.FC = () => {
  const [verseData, setVerseData] = useState({
    text: "",
    reference: "",
  });

  useEffect(() => {
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
        const data = await response.json();

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

    fetchVerseOfTheDay();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{verseData.reference}</h1>
      <p className="text-base">{verseData.text}</p>
    </div>
  );
};
