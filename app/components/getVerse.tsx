"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import * as cheerio from "cheerio";

export const VerseOfTheDay: React.FC = () => {
  const [verseData, setVerseData] = useState({
    citation: "",
    passage: "",
  });

  useEffect(() => {
    const fetchVerseOfTheDay = async () => {
      const URL = "https://www.bible.com/verse-of-the-day";

      try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        const versesArray: string[] = [];
        const citationsArray: string[] = [];

        const citations = $(".mbs-2");
        const verses = $("p.text-gray-50");

        await Promise.all(
          citations
            .map(async (i, p) => {
              let citation = $(p).text();
              citationsArray.push(citation);
            })
            .get()
        );

        await Promise.all(
          verses
            .map(async (i, p) => {
              let Verse = $(p).text();
              let reformattedVerse = Verse.replace(/\n/g, " ");
              versesArray.push(reformattedVerse);
            })
            .get()
        );

        setVerseData({
          citation: citationsArray[1],
          passage: versesArray[0],
        });
      } catch (err) {
        console.error(err);
        setVerseData({
          citation: "Proverbs 3:5",
          passage:
            "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        });
      }
    };

    fetchVerseOfTheDay();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{verseData.citation}</h1>
      <p className="text-base">{verseData.passage}</p>
    </div>
  );
};
