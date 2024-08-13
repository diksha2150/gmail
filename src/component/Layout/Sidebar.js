import React from "react";
import user from "../../Images/user_icon.png";
import frame from "../../Images/Frame 2087326278.png";
import { MdHomeFilled } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineSegment } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="h-screen left-0 w-11 flex flex-col justify-between items-center bg-[#1F1F1F] border border-slate-800">
      <div className="flex flex-col items-center pt-4">
        <img src={frame} alt="fram" className="w-5 h-5" />
      </div>
      <div className="flex-1 flex flex-col items-center py-8 gap-9">
        <MdHomeFilled className="text-[#9E9E9E]" />
        <MdPersonSearch className="text-[#9E9E9E]" />
        <LuInbox className="text-[#9E9E9E]" />
        <BsFillSendFill className="text-[#9E9E9E]" />
        <MdOutlineSegment className="text-[#9E9E9E]" />
        <BiSolidMessageSquareDetail className="text-[#9E9E9E]" />
        <GiNetworkBars className="text-[#9E9E9E]" />
      </div>
      <div className="flex items-center justify-center pb-4">
        <img src={user} alt="user" className="w-7 h-7" />
      </div>
    </div>
  );
};

export default Sidebar;
