import React from "react";
import "../Navigation/navigation.scss";
//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const App = () => (
  <div id="App">
    <Navigation />
    <div id="page-wrap">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  </div>
);

export default App;
