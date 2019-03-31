import React from "react";

//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";



const App = () => (
  <div>
    <div id ="page-wrap">
      <Navigation/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  </div>
);


export default App;