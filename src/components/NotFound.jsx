import React from "react";
import notfound from "../assets/404.gif";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[100%] object-cover" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
