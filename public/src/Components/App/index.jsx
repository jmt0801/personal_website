import React from "react";

//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Contact from "../Contact";


const App = () => (
  <div>
    <div id ="page-wrap">
      <Navigation/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact />
    </div>
  </div>
);


export default App;