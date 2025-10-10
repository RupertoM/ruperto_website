import React, { useState, useEffect } from "react";
import Image from "next/image";

interface VolleyballSlideshowProps {
  images: string[];
}

const Slideshow: React.FC<VolleyballSlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(updateImage, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  // Don't render if images array is empty
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
      <Image
        className="object-cover"
        src={images[currentImageIndex]}
        alt="Slideshow image"
        fill
      />
    </div>
  );
};

export default Slideshow;
