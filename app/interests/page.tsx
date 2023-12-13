import React from "react";
import { VerseOfTheDay } from "../components/getVerse";
import VolleyballSlideshow from "../components/vballSlideshow";
import { Button } from "@mui/material";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
/>;

export default function Interests() {
  return (
    <div className="w-screen h-[200vh] md:h-screen flex items-start justify-center md:items-center bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
      <div className="w-screen flex flex-col items-center gap-y-28 mt-2 md:mt-0 md:gap-y-0 md:flex-row md:justify-evenly">
        <div className="FAITH mt-40 md:mt-[-2rem] group h-56 w-72 md:h-96 md:w-80">
          <h1 className="special-font text-2xl text-center text-white font-bold font-dancing-script mb-4">
            Faith
          </h1>
          <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/cross.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <VerseOfTheDay />
              </div>
            </div>
          </div>
        </div>
        <div className="VOLLEYBALL md:mt-[-2rem] group h-56 w-72 md:h-96 md:w-80">
          <h1 className="special-font text-2xl text-center text-white font-bold mb-4">
            Volleyball
          </h1>
          <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/volleyball.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-md md:text-xl font-bold mb-0 md:mb-2">
                  Indoor Volleyball
                </h1>
                <ul className="text-small md:text-base list-disc">
                  <li>UNC Men's Outside Hitter</li>
                  <li>NCVF National Tournaments</li>
                  <li>ECVA Regional Tournaments</li>
                </ul>

                <h1 className="text-md md:text-xl font-bold mb-0 md:mb-2 mt-4 md:mt-8">
                  Beach Volleyball
                </h1>
                <ul className="text-small md:text-base list-disc">
                  <li>UNC Beach Volleyball</li>
                  <li>AVP America Tournaments</li>
                  <li>Open Level Matches</li>
                </ul>

                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                  }}
                  className="hidden md:block mt-6 transition duration-300 ease-in-out hover:text-black hover:bg-white"
                >
                  Photo Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="TECH md:mt-[-2rem] group h-56 w-72 md:h-96 md:w-80">
          <h1 className="special-font text-2xl text-center text-white font-bold font-dancing-script mb-4">
            Technology
          </h1>
          <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/tech.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Verse of the Day</h1>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="TRAVEL md:mt-[-2rem] group h-56 w-72 md:h-96 md:w-80">
          <h1 className="special-font text-2xl text-center text-white font-bold font-dancing-script mb-4">
            Adventures
          </h1>
          <div className="h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src="/travel.png"
                alt=""
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Verse of the Day</h1>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
