"use client";

import React, { useState } from "react";
import { VerseOfTheDay } from "../components/getVerse";
import Slideshow from "../components/Slideshow";
import { Button, Dialog, DialogContent, Icon } from "@mui/material";
import {
  Code,
  Whatshot,
  EmojiPeople,
  Psychology,
  SmartToy,
  Extension,
} from "@mui/icons-material";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
/>;

export default function Interests() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const handleToggleDialog = (images: string[]) => {
    setCurrentImages(images);
    setOpenDialog(!openDialog);
  };

  const volleyballImages = [
    "/ball4.png",
    "/ball5.png",
    "/ball2.png",
    "/ball1.png",
    "/ball3.png",
    "/ball6.png",
    "/ball7.png",
    "/ball9.png",
    "/ball8.png",
    "/ball10.png",
  ];

  const adventureImages = [
    "/img6.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img2.png",
    "/img7.png",
    "/img8.png",
    "/img9.png",
    "/img10.png",
    "/img11.png",
    "/img1.png",
  ];

  return (
    <div className="w-screen h-[200vh] md:h-screen flex items-start justify-center md:items-center bg-gradient-to-br from-slate-500/10 via-slate-200/25 to-slate-500/10">
      <div className="w-screen flex flex-col items-center gap-y-28 mt-2 md:mt-0 md:gap-y-0 md:flex-row md:justify-evenly">
        <div className="FAITH mt-28 md:mt-[-2rem] group h-56 w-72 md:h-96 md:w-80">
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
                  <li>UNC Men&apos;s Outside Hitter</li>
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
                    display: "none",
                    "@media (min-width: 768px)": {
                      display: "block",
                    },
                    marginTop: "1.5rem",
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
                  onClick={() => handleToggleDialog(volleyballImages)}
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
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-8">
                  Topics of Affinity
                </h1>
                <div className="space-y-1 md:space-y-3">
                  <p className="text-sm md:text-base">
                    <Icon component={Code} /> Full Stack Development
                  </p>
                  <p className="text-sm md:text-base">
                    <Icon component={Whatshot} /> Bleeding Edge Technologies
                  </p>
                  <p className="text-sm md:text-base">
                    <Icon component={EmojiPeople} /> The Metaverse
                  </p>
                  <p className="text-sm md:text-base">
                    <Icon component={Psychology} /> Artificial Intelligence
                  </p>
                  <p className="text-sm md:text-base">
                    <Icon component={SmartToy} /> Robotics and Automation
                  </p>
                  <p className="text-sm md:text-base">
                    <Icon component={Extension} /> Technical Innovations
                  </p>
                </div>
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
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 md:px-10 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-sm md:text-base mb-6">
                  Click below to checkout my photos; capturing hobbies, friends,
                  and travel. It&apos;s a glimpse into the things that truly
                  matter, highlighting the joy of relationships, my passions in
                  life, and the thrill of exploration.
                </p>
                <Button
                  variant="outlined"
                  sx={{
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
                  onClick={() => handleToggleDialog(adventureImages)}
                >
                  Photo Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleToggleDialog}>
        <DialogContent
          sx={{
            width: "30vw",
            height: "75vh",
            backgroundColor: "black",
            overflow: "hidden",
            "@media (max-width: 1024px)": {
              width: "70vw",
              height: "40vh",
            },
          }}
        >
          <Slideshow images={currentImages} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
