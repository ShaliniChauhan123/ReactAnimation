import React from "react";
import { cardItems } from "../utils/config";

const Pagination = ({ totalPages, currentPage, taskCompleted }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    !taskCompleted && (
      <div className="space-x-3 flex lg:pb-0 pb-[25px]">
        <div className="text-white lg:text-lg text-sm leading[18px] font-bold pr-[6px]">
          {`${currentPage}/${cardItems.length}`}
        </div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={` ${pageNumber === currentPage ? "active" : ""}`}
          >
            <div
              className={`lg:w-2 lg:h-2 w-[6px] h-[6px] rounded-full ${
                pageNumber === currentPage ? "bg-white" : "bg-[#ffffff33]"
              }`}
            ></div>
          </button>
        ))}
      </div>
    )
  );
};

export default Pagination;
