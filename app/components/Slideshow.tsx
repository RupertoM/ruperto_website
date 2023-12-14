import React, { useState, useEffect } from "react";

interface VolleyballSlideshowProps {
  images: string[];
}

const Slideshow: React.FC<VolleyballSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 2000);

    return () => clearInterval(intervalId);
  }, [images]);

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

export default Slideshow;
