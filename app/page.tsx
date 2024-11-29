import React from "react";
import dynamic from "next/dynamic";

import Navi from "../components/navi";  
import About from "../components/about"
import Skills from "../components/skills"
import Project from "../components/project"
import Footer from "../components/footer"

const SplineScrollScene = dynamic(() => import("../components/SplineScrollScene"));

export default function Home() {
  return (
    <div>
      <Navi />  
      <SplineScrollScene />
      <About />
      <Skills/>
      <Project />
      <Footer />
    </div>
  );
}
