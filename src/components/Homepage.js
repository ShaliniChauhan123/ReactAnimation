import React from "react";
import playIcon from "../assets/play.svg";

const Homepage = ({
  handleMouseEnter,
  handleMouseLeave,
  playButtonHandler,
  isHovered,
}) => (
  <div className=" flex lg:w-[55%] w-full flex-col text-center text-white justify-center p-5">
    <div className="text-white lg:text-6xl lg:leading-[80px] text-4xl leading-[40px] lg:font-bold font-medium">
      Addition and Subtraction Facts within 20
    </div>
    <div className="text-2xl leading-9 lg:font-medium font-normal pt-1 px-12">
      Test your knowledge with the following questions, tap a card to flip it
      and uncover the answer, good luck!
    </div>
    <div className="pt-10 flex justify-center items-center">
      <button
        className="button bg-[#FDF416] flex py-5 px-9 rounded-full items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={playButtonHandler}
      >
        <img
          src={playIcon}
          alt="play"
          className={`play-icon ${isHovered ? "w-[30px] h-[30px]" : " "}`}
        ></img>
        <div className="pl-3 text-[18px] leading-[17px] font-bold text-black">
          Let's play
        </div>
      </button>
    </div>
  </div>
);

export default Homepage;
