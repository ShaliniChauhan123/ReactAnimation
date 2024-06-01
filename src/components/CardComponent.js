import React, { useState } from "react";
import RightArrow from "../assets/RightArrow";
import LeftArrow from "../assets/LeftArrow";
import CheckedIcon from "../assets/CheckedIcon";
import ReplayIcon from "../assets/ReplayIcon";
import { cardItems } from "../utils/config";
import { Card } from "./Card";

export const CardComponent = ({
  currentPage,
  onPageChange,
  taskCompleted,
  setTaskCompleted,
  setIsZoomPaused,
  handlePrevPage,
  handleNextPage,
  isAnimating,
  animationClass,
  isFlipped,
  setIsFlipped,
}) => {
  const itemsPerPage = 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = cardItems.slice(startIndex, endIndex);

  const [isHovered, setIsHovered] = useState(false);

  const handleReplay = () => {
    setTaskCompleted(false);
    onPageChange(1);
    setIsZoomPaused(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return taskCompleted ? (
    <div className="flex flex-col justify-center items-center">
      <CheckedIcon />

      <div className="lg:text-[30px] font-semibold leading-5 text-white pt-9 text-md">
        Hope you learned something new!
      </div>
      <div className="pt-12">
        <button
          className="button bg-[#FDF416] flex py-5 px-9 rounded-full items-center"
          onClick={handleReplay}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={"play-icon"}>
            <ReplayIcon
              width={isHovered ? 28 : 22}
              height={isHovered ? 28 : 22}
            />
          </div>
          <div className="pl-3 text-[18px] leading-[17px] font-bold text-black">
            Play again
          </div>
        </button>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex items-center space-x-[8%]  justify-center">
        <button
          onClick={handlePrevPage}
          className="hover:bg-[#fdf416] bg-[#4B3B33] items-center  justify-center rounded-full flex-shrink-0 w-[60px] h-[60px] lg:flex hidden "
        >
          <LeftArrow fill={"black"} />
        </button>

        <div className={`flex justify-center shadow-2xl ${animationClass}`}>
          <div className="scene flex flex-col xl:w-[890px] lg:w-[700px]  w-[339px] lg:h-[500px] h-[400px] lg:my-10  mx-0">
            {currentCards.map((card, index) => (
              <Card
                key={index}
                question={card.ques}
                imgUrl={card.imgUrl}
                isAnimating={isAnimating}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            ))}
          </div>
        </div>
        <button
          onClick={handleNextPage}
          className={`rounded-full  w-[60px] h-[60px] items-center justify-center flex-shrink-0 lg:flex hidden ${
            currentPage <= cardItems.length ? "bg-[#fdf416]" : "bg-[#4B3B33]"
          }`}
        >
          <RightArrow
            fill={currentPage <= cardItems.length ? "black" : "white"}
          />
        </button>
      </div>
      <div className="flex justify-between pt-6">
        <button
          onClick={handlePrevPage}
          className="hover:bg-[#fdf416] bg-[#4B3B33] items-center  justify-center rounded-full flex-shrink-0 w-12 h-12 lg:hidden flex "
        >
          <LeftArrow fill={"black"} />
        </button>
        <button
          onClick={handleNextPage}
          className={`rounded-full  w-12 h-12 items-center justify-center flex-shrink-0 lg:hidden flex ${
            currentPage <= cardItems.length ? "bg-[#fdf416]" : "bg-[#4B3B33]"
          }`}
        >
          <RightArrow
            fill={currentPage <= cardItems.length ? "black" : "white"}
          />
        </button>
      </div>
    </div>
  );
};
