import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
import "./App.css";
import Dashboard from "./containers/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";

const isAuthenticated = () => {
  if (localStorage.getItem("stugentAuthToken")) {
    return true;
  } else {
    return false;
  }
};


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, ...rest }, props) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/chats" component={Chat} />
          <PrivateRoute path="/listings" component={Listings} />
          <Route path="/listing" component={SingleListing} />
          <Route path="/search" component={ListingSearch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
