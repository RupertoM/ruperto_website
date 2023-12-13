"use client";

import React, { useState, useEffect } from "react";

const VolleyballSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/Angular.svg", "/tarheel.png", "/GitHub.png"]; // Update with your actual image links

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img
        className="object-cover w-full h-full"
        src={images[currentImageIndex]}
        alt=""
      />
    </div>
  );
};
export default VolleyballSlideshow;
