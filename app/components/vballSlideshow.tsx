"use client";

import React, { useState, useEffect } from "react";

const VolleyballSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/ball4.png",
    "/ball5.png",
    "/ball2.png",
    "/ball1.png",
    "/ball3.png",
    "/ball6.png",
    "/ball7.png",
    "/ball9.png",
    "/ball8.png",
    "/ball11.png",
    "/ball10.png",
  ];

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img
        className="object-cover w-full h-full"
        src={images[currentImageIndex]}
        alt=""
      />
    </div>
  );
};
export default VolleyballSlideshow;
