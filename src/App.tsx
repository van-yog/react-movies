import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import MovieInfo from "./components/MovieInfo";

import Navigation from "./components/Navigation";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
