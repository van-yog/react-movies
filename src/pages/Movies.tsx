import { FC } from "react";
import { useHistory } from "react-router";

const Movies: FC = () => {
  const history = useHistory();

  return (
    <div>
      Movies page
      <button onClick={() => history.push("/")}>Go home</button>
    </div>
  );
};

export default Movies;
