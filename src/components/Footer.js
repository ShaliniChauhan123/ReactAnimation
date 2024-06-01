import React from "react";
import logoText from "../assets/logoText.svg";

const Footer = () => (
  <div className="absolute flex bottom-4 left-4 text-[#FFFFFFBF] text-2xl z-10 text-[13px] font-medium justify-center items-center">
    Powered by
    <span className="pl-1">
      <img src={logoText} alt="logoText" />
    </span>
  </div>
);

export default Footer;
