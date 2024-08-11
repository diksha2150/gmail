import React from "react";
import user from "../Images/user_icon.png";
import frame from "../Images/Frame 2087326278.png";
import { MdHomeFilled } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";
import { LuInbox } from "react-icons/lu";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineSegment } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div
      className="fixed top-4 left-0 h-screen divide-y-2-[
#343A40] w-11 flex flex-col justify-between items-center bg-[#1F1F1F] "
    >
      <div className="flex flex-col items-start  ">
        <img src={frame} alt="fram" className="w-5 h-5" />
      </div>
      <div className="flex-1 flex flex-col items-center py-8 gap-9">
        <MdPersonSearch className="text-white" />
        <MdHomeFilled className="text-white" />
        <LuInbox className="text-white" />
        <BsFillSendFill className="text-white" />
        <MdOutlineSegment className="text-white" />
        <BiSolidMessageSquareDetail className="text-white" />
        <GiNetworkBars className="text-white" />
      </div>

      <div className="flex flex-col items-center fixed bottom-1">
        <img src={user} alt="user" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Sidebar;
