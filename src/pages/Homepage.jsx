import React from "react";

import { Hero, Explore, About } from "../components";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
    </div>
  );
};

export default Homepage;
