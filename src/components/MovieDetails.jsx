import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import HorizontalCard from "./partials/HorizontalCard";
import Loading from "./Loading";

const Moviedetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7),rgba(0,0,0,9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[160vh] px-[10%]"
    >
      {/* Part-1 Navigation */}
      <nav className="w-full h-[10vh] text-zinc-200 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="mr-2 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          imdb
        </a>
      </nav>

      {/* Part-2 Poster and details */}
      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] text-white">
          <h1 className="text-5xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <h1 className="mt-2 text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <div className="mt-3 mb-5 flex  items-center gap-x-5 ">
            <span className="rounded-full text-lg font-semibold bg-yellow-400 text-zinc-800 w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[55px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="mt-1 mb-2 text-xl font-semibold">Overview</h1>
          <p className="mb-2">{info.detail.overview}</p>

          <h1 className="mt-1 mb-2 text-xl font-semibold">Available in</h1>
          <p className="mb-5">{info.translations.join(", ")}</p>

          <Link
            className="py-3 px-8 bg-[#6556CD] rounded-full items-end"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Part-3 Available platforms */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part-4 Recommendations & Similar */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar
      </h1>
      <HorizontalCard
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
