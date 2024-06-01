import React, { useState } from "react";
import TapIcon from "../assets/tapIcon";

export const Card = ({
  question,
  imgUrl,
  isAnimating,
  isFlipped,
  setIsFlipped,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isAnimating) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className={`card relative w-full h-full cursor-pointer  ${
        isFlipped ? "is-flipped" : ""
      }`}
      onClick={handleFlip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`card__face card__face--front bg-white absolute w-full h-full  rounded-[20px] flex  justify-center items-center shadow-2xl backface-hidden ${
          isHovered ? "hover-effect" : ""
        }`}
      >
        <div className="flex flex-col">
          <div className="text-black text-center lg:text-[47px] text-[30px] lg:leading-[65px] leading-[44px]  font-copernicus lg:mx-[65px] mx-[15px] font-medium">
            {question}
          </div>
          <div className="flex justify-center pt-20">
            <TapIcon />
            <div className="pl-2">Tap to reveal answer</div>
          </div>
        </div>
      </div>
      <div className="card__face card__face--back bg-white absolute w-full h-full rounded-[20px]">
        <img src={imgUrl} alt={imgUrl} className="lg:h-auto h-full"></img>
      </div>
    </div>
  );
};
