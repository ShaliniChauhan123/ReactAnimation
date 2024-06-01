import React from "react";
import logo from "../assets/logo.svg";
import soundIcon from "../assets/sound.svg";

const Header = () => (
  <>
    <div className="absolute top-4 left-4 text-white text-2xl z-10">
      <div className="flex justify-between">
        <img src={logo} alt="logo" />
        <div className="flex flex-col pl-3">
          <div className="text-sm leading-[14px] font-bold">
            Cloudifyapp Pvt. Ltd.
          </div>
          <div className="text-[11px] leading-[11px] font-medium pt-2">
            By Shalini Chauhan
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-4 right-4 text-white text-2xl z-10">
      <img src={soundIcon} alt="sound" />
    </div>
  </>
);

export default Header;
