import { FC, useEffect, useState, ReactElement } from "react";
import MovieItem from "../components/MovieItem";
import IMovieItem from "../interfaces/interfaces";

const Home: FC = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  useEffect((): void => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74"
      );
      const result = await response.json();
      setData(result.results);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">Popular &nbsp;&nbsp; films</h1>
      <div className="home__container">
        {data.map((movie: IMovieItem): ReactElement<any, any> | null => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
