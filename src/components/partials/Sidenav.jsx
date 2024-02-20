import React, { useEffect } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 px-10 py-5">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-line mr-2"></i>
        <span className="text-xl">MOViE.ps</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text- gap-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link
        to="/trending"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link 
        to="/popular"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link to="/movies" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link
        to="/tv"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-tv-2-fill mr-2"></i>Tv Shows
        </Link>
        <Link 
        to="/person"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-team-fill mr-2"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text- gap-1">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Info
        </h1>
        <Link
        to="/about"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-information-fill mr-2"></i>About MOViE.ps
        </Link>
        <Link
        to="/contact"
        className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-phone-fill mr-2"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
