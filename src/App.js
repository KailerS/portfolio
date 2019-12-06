import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
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
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/projects"} component={Projects}/>
          <Route exact path={"/contact"} component={Contact}/>
        </Switch>
        <Footer/>
      </>      
    </HashRouter>
  );
}

export default App;
