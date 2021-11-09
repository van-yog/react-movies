import React, { useEffect, useState } from "react";
import { Switch, useParams, Route } from "react-router";
import { NavLink } from "react-router-dom";
import posterUrl from "../utils/utils";
import MovieCast from "./MovieCast";
import MovieReviews from "./MovieReviews";

type param = {
  id: string;
};

interface IMovieInfo {
  title: string;
  poster_path: string;
  overview: string;
  runtime: number;
  vote_average: number;
  homepage: string;
}

const MovieInfo = () => {
  const [data, setData] = useState({} as IMovieInfo);

  const param: param = useParams();
  console.log("id", param.id);

  useEffect((): void => {
    const fetchData = async () => {
      console.log("use Effect! funct");
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US`
      );
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [param.id]);

  console.log("data=", data);
  return (
    <>
      <div className="movie-info">
        <img
          className="movie-info__image"
          src={posterUrl(data.poster_path)}
          alt={data.title}
        />
        <div>
          <h2 className="movie-info__title">{data.title}</h2>
          <p className="movie-info__text">{data.overview}</p>
          <div className="movie-info__information">
            <p>Runtime: {data.runtime}</p>
            <p>Rating: {data.vote_average}</p>
          </div>
          <a
            className="movie-info__homepage"
            href={data.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.homepage}
          </a>
          <div className="movie-info__more">
            <NavLink
              className="movie-info__cast navigation__link"
              to={`/movie/${param.id}/cast`}
            >
              <span>show &nbsp; &nbsp; cast</span>
            </NavLink>
            <NavLink
              className="movie-info__revies navigation__link"
              to={`/movie/${param.id}/reviews`}
            >
              <span>show &nbsp; &nbsp; reviews</span>
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route path={`/movie/${param.id}/cast`}>
          <MovieCast id={param.id} />
        </Route>
        <Route path={`/movie/${param.id}/reviews`}>
          <MovieReviews id={param.id} />
        </Route>
      </Switch>
    </>
  );
};

export default MovieInfo;
