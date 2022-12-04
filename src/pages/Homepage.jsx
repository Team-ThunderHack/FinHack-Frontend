import React from "react";

import { Hero, Explore, About, Footer } from "../components";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div>
        <Footer display={true} />
      </div>
    </div>
  );
};

export default Homepage;
