import React, { useState } from "react";
import backgroundImage from "./assets/backgroundImage.png";
import { CardComponent } from "./components/CardComponent";
import { cardItems } from "./utils/config";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [isZoomPaused, setIsZoomPaused] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  // eslint-disable-next-line
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setIsFlipped(false);
    if (currentPage > 1) {
      setIsAnimating(true);
      setAnimationClass("animate-slide-left");
      setTimeout(() => {
        setAnimationClass("");
        setIsAnimating(false);
      }, 100);
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setIsFlipped(false);
    if (currentPage === cardItems.length) {
      setTaskCompleted(true);
      setIsZoomPaused(false);
    } else {
      setIsAnimating(true);
      setAnimationClass("animate-slide-right");
      setTimeout(() => {
        setAnimationClass("");
        setIsAnimating(false);
      }, 100);
      handlePageChange(currentPage + 1);
    }
  };

  const playButtonHandler = () => {
    setIsButtonClicked(true);
    setIsZoomPaused(true);
  };

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        isZoomPaused ? "paused" : ""
      }`}
    >
      <div className="w-full h-full overflow-y-scroll">
        {/* Background Image with Zoom Animation */}
        <div
          className={`absolute inset-0 w-full h-screen bg-no-repeat bg-cover bg-center animate-zoom-bg  ${
            isZoomPaused ? "paused" : ""
          }`}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#00000099] bg-opacity-50 pointer-events-none"></div>
        <Header />
        <Footer />

        <div className="relative z-10 flex items-center justify-center h-full">
          {isButtonClicked ? (
            <div className="flex flex-col items-center justify-center absolute lg:left-[10%] lg:right-[10%]">
              <Pagination
                totalPages={cardItems.length}
                currentPage={currentPage}
                taskCompleted={taskCompleted}
              />
              <CardComponent
                currentPage={currentPage}
                onPageChange={handlePageChange}
                taskCompleted={taskCompleted}
                setTaskCompleted={setTaskCompleted}
                setIsZoomPaused={setIsZoomPaused}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                animationClass={animationClass}
                setIsAnimating={setIsAnimating}
                isFlipped={isFlipped}
                setIsFlipped={setIsFlipped}
              />
            </div>
          ) : (
            <Homepage
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              playButtonHandler={playButtonHandler}
              isHovered={isHovered}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
