import React from "react";
import { fundamentals } from "../assets/constants";

const LearningPath = () => {
  return (
    <div className="ml-4">
      <h1>Fundamentals</h1>
      <div className="p-2 flex flex-row flex-wrap gap-5 justify-start items-center">
        {fundamentals.map((video, i) => (
          <iframe
            key={i}
            width={300}
            height={300}
            src={video.src}
            title={video.title}
            // frameborder="0"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
