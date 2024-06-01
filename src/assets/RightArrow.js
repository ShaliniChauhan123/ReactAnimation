import React from "react";

const RightArrow = ({ fill }) => (
  <svg
    width="15"
    height="18"
    viewBox="0 0 15 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.32733 1.74408C5.65277 1.41864 6.1804 1.41864 6.50584 1.74408L13.1725 8.41074C13.4979 8.73618 13.4979 9.26382 13.1725 9.58926L6.50584 16.2559C6.1804 16.5814 5.65277 16.5814 5.32733 16.2559C5.00189 15.9305 5.00189 15.4028 5.32733 15.0774L11.4047 9L5.32733 2.92259C5.00189 2.59715 5.00189 2.06951 5.32733 1.74408Z"
      fill={fill}
      stroke={fill}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default RightArrow;
