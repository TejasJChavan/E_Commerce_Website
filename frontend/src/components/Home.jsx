import React from "react";
import Carousel from "./Carousel";
import Grid from "./Grid";
import Navbar from "./Navbar";
import Features from "./Features";

function Home() {
  return (
    <>
      <div className="bg-1 relative z-0">
        <Navbar />
        <div className="relative z-10">
          <Carousel />
        </div>
        <Features />
        <Grid />
      </div>
    </>
  );
}

export default Home;
