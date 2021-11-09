/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, FC, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import SearchBar from "../components/SearchBar";
import MovieItem from "../components/MovieItem";
import IMovieItem from "../interfaces/interfaces";

const Movies: FC = () => {
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const queryInit = searchParams.get("query") || "";

  const [query, setQuery] = useState(queryInit);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchMovie = async (queryValue: string) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&query=${queryValue}&=en-US&page=1&include_adult=false`
      );
      const result = await response.json();
      console.log("result", result);
      setData(result.results);
    };

    fetchMovie(query);
  }, [query]);

  const handleSubmit = (query: string): void => {
    setQuery(query);
    history.push(`/movies/?query=${query}`);
  };
  return (
    <div className="movies">
      <SearchBar onSumbit={handleSubmit} />
      <div className="movies__container">
        {data.map((movie: IMovieItem): ReactElement<any, any> | null => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
