import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const Navigation: FC = () => {
  const location = useLocation();

  return (
    <div className="navigation">
      <NavLink className="navigation__link" to="/">
        <span> Home</span>
      </NavLink>
      <NavLink className="navigation__link" to="/movies">
        <span>Movies</span>
      </NavLink>
      {location.pathname !== "/" && (
        <NavLink className="navigation__link" to="/">
          <span>Back</span>
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
