import React from "react";

interface LogoProps {
  title: string;
  imgSrc: string;
  altText: string;
  className: string;
  isContain?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  title,
  imgSrc,
  altText,
  isContain = false,
}) => {
  return (
    <div className="text-center ml-5 mr-5">
      <h5 className="text-xl mb-2 md:mb-4">{title}</h5>
      <img
        src={imgSrc}
        alt={altText}
        className={`w-10 h-10 md:w-20 md:h-20 mb-5 md:mb-10 ${
          isContain ? "object-contain" : "object-cover"
        } mx-auto`}
      />
    </div>
  );
};

export default Logo;
