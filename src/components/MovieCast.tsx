import React, { useEffect, useState, FC } from "react";
import { ICast } from "../interfaces/interfaces";

type PropsMoviewCast = {
  id: string;
};

const MovieCast: FC<PropsMoviewCast> = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect((): void => {
    const fetchData = async () => {
      console.log("use Effect! funct");
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US`
      );
      const result = await response.json();
      console.log("result cast:", result);
      setData(result.cast);
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie-cast">
      {data
        .filter((item: ICast) => item.profile_path !== null)
        .map((artist: ICast) => (
          <div key={artist.id} className="movie-cast__cart">
            <p className="movie-cast__name">{artist.original_name}</p>
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${artist.profile_path}`}
              alt={artist.original_name}
              className="movie-cast__image"
            />
          </div>
        ))}
    </div>
  );
};

export default MovieCast;
