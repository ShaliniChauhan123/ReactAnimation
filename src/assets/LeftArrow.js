import React from "react";

const LeftArrow = ({ fill }) => (
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
      d="M9.67291 16.2559C9.34748 16.5814 8.81984 16.5814 8.4944 16.2559L1.82774 9.58926C1.5023 9.26382 1.5023 8.73618 1.82774 8.41074L8.4944 1.74408C8.81984 1.41864 9.34748 1.41864 9.67291 1.74408C9.99835 2.06951 9.99835 2.59715 9.67291 2.92259L3.5955 9L9.67291 15.0774C9.99835 15.4028 9.99835 15.9305 9.67291 16.2559Z"
      fill={fill}
      stroke={fill}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LeftArrow;
