import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Reply = () => {
  return (
    <>
      <div className="flex flex-col items-center w-60 bg-black left-20 ml-32">
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h2 className="text-white">All Inbox(s)</h2>{" "}
              <IoIosArrowDown color="white" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reply;
