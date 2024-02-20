import React from "react";
import loader from "../assets/loader.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1F1E24]">
      <img className="h-[60%] object-cover" src={loader} alt="" />
    </div>
  );
};

export default Loading;
