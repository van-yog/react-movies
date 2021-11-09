export default interface IMovieItem {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  adult: boolean;
}

export interface IReview {
  id: string;
  content: string;
  author_details: {
    username: string;
  };
}

export interface ICast {
  id: number;
  original_name: string;
  profile_path: string;
  character: string;
}
