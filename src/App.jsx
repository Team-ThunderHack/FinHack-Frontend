import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Homepage,
  IntradayIndex,
  LearningPath,
  OptionsDashboard,
} from "./pages";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white ">
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/options-dashboard" element={<OptionsDashboard />} />
        <Route path="/learningPath" element={<LearningPath />} />
        <Route path="/intraday-index" element={<IntradayIndex />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
