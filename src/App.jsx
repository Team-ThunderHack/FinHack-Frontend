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
    <div className="bg-primary-black overflow-hidden text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/options-dashboard" element={<OptionsDashboard />} />
        <Route path="/learningPath" element={<LearningPath />} />
        <Route path="/intraday-index" element={<IntradayIndex />} />
      </Routes>
    </div>
  );
};

export default App;
