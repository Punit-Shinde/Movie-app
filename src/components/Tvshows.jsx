import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
const Tvshows = () => {
  
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [duration, setduration] = useState("day");
  const [tv, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  
  document.title = "TvApp | Tv " +category;

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const refershHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      setmovie([]);
      GetTv();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return tv.length > 0 ? (
    <div className=" w-screen h-screen">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className=" text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-2 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          {""}
          Tv<small className="ml-2 text-sm text-zinc-600" >
            ({category})
          </small>
        </h1>
        <div className="flex items-center w-[80%] gap-5">
          <Topnav />
          <Dropdown
            title="Category"
            options={["pupolar", "top_rated", "upcoming","now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards data={tv} title="tv"/>
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Tvshows