"use client"; 

import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScrollScene() {
  const sceneRef = useRef(null);

  const handleLoad = (splineApp) => {
    sceneRef.current = splineApp; 
    console.log("Spline loaded:", splineApp);

    if (splineApp && splineApp.scene) {
      const object = splineApp.scene.getObjectByName("Cube");
      if (object) {
        object.position.set(0, 5, 0);
      } else {
        console.log("Object not found");
      }
    } else {
      console.log("Spline app or scene is not loaded properly");
    }
  };

  useEffect(() => {
    if (sceneRef.current) {
      console.log("Spline is ready to use!");
    }
  }, []);

  return (   
      <div id="spline" style={{ height: "100%", width: "100%" }}>
        <Spline scene="https://prod.spline.design/mnFPl7kj1S3MoEkk/scene.splinecode" onLoad={handleLoad} />
      </div>
  );
}
