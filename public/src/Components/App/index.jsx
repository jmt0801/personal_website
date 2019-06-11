import React from "react";
import "../Hamburger/hamburger.scss";
//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";

const App = () => (
  <div id="App">
    <Navigation />
    <Home />
    <div className="parallax-1" />
    <About />
    <div className="parallax-2" />
    <Skills />
    <div className="parallax-3" />
    <Portfolio />
    <div className="parallax-4" />
    <Contact />
    <Footer />
  </div>
);

export default App;
