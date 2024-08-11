import React from "react";
import message from "../Images/NoMessageIllustration.png";
const Salespipline = () => {
  return (
    <>
      <div className=" h-screen flex flex-col  items-center justify-center bg-black gap-10">
        <img src={message} alt="message" className="w-54 h-52" />
        <div className="flex flex-col items-center gap-6 ">
          <h3 className="text-white  font-bold tracking-widest">
            It’s the beginning of a legendary sales pipeline{" "}
          </h3>
          <h3 className="text-[#9E9E9E] font-semibold w-[270px]  text-center tracking-normal">
            When you have inbound E-mails you’ll see them here
          </h3>
        </div>
      </div>
    </>
  );
};

export default Salespipline;
