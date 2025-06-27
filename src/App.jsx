import React, { useEffect } from "react";
import Navbar from "./compoenents/Navbar";
import Home from "./compoenents/Home";
import Experience from "./compoenents/Experience";
import Skill from "./compoenents/Skill";
import Project from "./compoenents/project";
import Contect from "./compoenents/Contect";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* animation on scroll ak libray hoti hai jisa ka use kar ka ham lo animation bana sakte hai  npm i aos*/}
      <Navbar></Navbar>
      <div className="container">
        <Home></Home>
        <Experience></Experience>
        <Skill></Skill>
        <Project></Project>

        <Contect></Contect>
      </div>
    </>
  );
};

export default App;
