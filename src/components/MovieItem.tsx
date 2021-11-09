import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import IMovieItem from "../interfaces/interfaces";
import posterUrl from "../utils/utils";

const MovieItem: FC<{ movie: IMovieItem }> = ({ movie }) => {
  console.log("Movie=", movie);
  return (
    <NavLink to={`/movie/${movie.id}`} className="movie-item">
      <img
        className="movie-item__image"
        src={`${movie.poster_path ? posterUrl(movie.poster_path) : "/noposter.jpeg"}`}
        alt={`${movie.title}`}
      />
      <div className="movie-item__vote">{movie.vote_average}</div>
      <p className="movie-item__title">Title: {movie.title}</p>
    </NavLink>
  );
};

export default MovieItem;
