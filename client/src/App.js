import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import AddMovie from "./views/AddMovie";
import AddTVSerial from "./views/AddTVSerial";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Movies from "./views/Movies";
import TVSeries from "./views/TVSeries";
import EditMovie from "./views/EditMovie";
import EditTVSerial from "./views/EditTVSerial";
import MovieDetail from "./views/MovieDetail";
import TVSerialDetail from "./views/TVSerialDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route path="/add-movie">
          <AddMovie />
        </Route>
        <Route path="/add-tv">
          <AddTVSerial />
        </Route>
        <Route path="/edit-movie/:id">
          <EditMovie />
        </Route>
        <Route path="/edit-tv/:id">
          <EditTVSerial />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/tvserial/:id">
          <TVSerialDetail />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tvseries">
          <TVSeries />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
