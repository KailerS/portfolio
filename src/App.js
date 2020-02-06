import React from 'react';
// Hash route to make sure it deploys properly to gitpages
import { HashRouter, Route, Switch } from "react-router-dom";
// Imports of all my  pages and the footer component
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/index";
import Footer from "./components/Footer";

function App() {
  return (
    <HashRouter basename="/">
      <>
        <Switch>
          {/* Switches pages based on what path the user hits to act like a multi page website */}
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/projects"} component={Projects}/>
          <Route exact path={"/contact"} component={Contact}/>
          {/* Add a non specific path that displays a 404 if user types in a bad pathway */}
        </Switch>
        <Footer/>
      </>      
    </HashRouter>
  );
}

export default App;
