import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/containers/Home/Home";
import Login from "./components/Auth/Login";
import Register, {
  useState,
  useContext,
  createContext,
} from "./components/Auth/Register";
import Listings from "./components/Listings/Listings";
import SingleListing from "./components/Listings/SingleListing";
import ListingSearch from "./components/Listings/ListingSearch";
import About from "./containers/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/listings" component={Listings} />
          <Route path="/listing" component={SingleListing} />
          <Route path="/search" component={ListingSearch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
