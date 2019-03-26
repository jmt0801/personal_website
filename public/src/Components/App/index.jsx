import React from "react";

//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";



const App = () => (
  <div>
    <div id ="page-wrap">
      <Navigation/>
      <Home/>
      <About/>
    </div>
  </div>
);

export default App;