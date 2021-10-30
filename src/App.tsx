import { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

import Navigation from "./components/Navigation";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
