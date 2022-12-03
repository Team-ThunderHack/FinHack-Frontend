import React, { useState } from "react";
import { dataAnalysis, fundamentals, technicals } from "../assets/constants";

const path = [
  {
    title: "Fundamentals",
    data: fundamentals,
  },
  {
    title: "Technicals",
    data: technicals,
  },
  {
    title: "Data Analysis",
    data: dataAnalysis,
  },
];

const LearningPath = () => {
  const hello = async () => {
    const data = await fetch("https://www.google.com/");
    console.log(data);
  };
  hello();

  const [active, setActive] = useState(2);
  console.log(active);
  return (
    <div className="mx-32">
      <div className="tabs flex flex-row gap-8 text-2xl m-8">
        {path.map((p, idx) => {
          if (idx == active) {
            return (
              <div key={idx} className="hover:cursor-pointer font-bold">
                {p.title}
              </div>
            );
          }
          return (
            <div
              key={idx}
              className="hover:cursor-pointer"
              onClick={() => setActive(idx)}
            >
              {p.title}
            </div>
          );
        })}
      </div>
      <div className="p-8 flex flex-row flex-wrap gap-5 justify-start items-center hover:cursor-pointer">
        {path[active].data.map((video, i) => {
          return (
            <div key={i} className="bg-[#294559] p-8 rounded-xl">
              <iframe
                width={400}
                height={225}
                src={video.src}
                title={video.title}
                // frameborder="0"
              ></iframe>
              <div className="text-xl mt-4">
                <a href={video.to} target="_blank">
                  {video.title.length > 40
                    ? video.title.substring(0, 39) + " ..."
                    : video.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
