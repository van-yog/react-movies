import React, { useEffect, useState, FC, ReactElement } from "react";
import { IReview } from "../interfaces/interfaces";
type PropsMoviewReview = {
  id: string;
};

const MovieReviews: FC<PropsMoviewReview> = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect((): void => {
    const fetchData = async () => {
      console.log("use Effect! funct");
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c9def6d7a5d5fc0ed5251d8a1080bf74&language=en-US`
      );
      const result = await response.json();
      console.log("result review:", result.results);
      setData(result.results);
    };

    fetchData();
  }, [id]);

  return (
    <div className="movie-review">
      <div className="movie-review__container">
        {data.map((review: IReview): ReactElement<any> | null => (
          <div key={review.id} className="movie-review__card">
            <p className="movie-review__username">
              {review.author_details.username}
            </p>
            <div className="movie-review__text">{review.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;
