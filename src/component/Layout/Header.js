import React from "react";
import circle from "../../Images/Vector (16).png";
import sun from "../../Images/circle 2938.png";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex  bg-[#17191c] w-full h-14 items-center justify-between px-16 border border-slate-800 fixed top-0 ">
        <h1 className="text-white">Onebox</h1>
        <div className="flex justify-between gap-7">
          <button className="flex items-center gap-3  rounded-full shadow-white px-1 border border-slate-700">
            <img src={sun} alt="sun" className="w-3 h-3" />
            <img src={circle} alt="Circle" className="w-3 h-3" />
          </button>
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-white">Tim's workspace</h1>
            <IoIosArrowDown className="text-white w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
