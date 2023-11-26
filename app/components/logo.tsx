import React from "react";

interface LogoProps {
  title: string;
  imgSrc: string;
  altText: string;
}

const Logo: React.FC<LogoProps> = ({ title, imgSrc, altText }) => {
  return (
    <div className="text-center ml-10">
      <h5 className="text-xl mb-4">{title}</h5>
      <img
        src={imgSrc}
        alt={altText}
        className="w-20 h-20 object-cover mx-auto"
      />
    </div>
  );
};

export default Logo;
