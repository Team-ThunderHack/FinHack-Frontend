import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/styles";
import { staggerContainer } from "../assets/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import planet01 from "../images/planet-01.png";
import planet02 from "../images/planet-02.png";
import planet03 from "../images/planet-03.png";

const exploreFeatures = [
  {
    id: "world-1",
    imgUrl: planet01,
    title: "Learning Path",
    to: "/learningPath",
  },
  {
    id: "world-2",
    imgUrl: planet02,
    title: "Strategies",
    to: "/intraday-index",
  },
  {
    id: "world-3",
    imgUrl: planet03,
    title: "Options Dashboard",
    to: "/options-dashboard",
  },
];

const Explore = () => {
  const [active, setActive] = useState("world-1");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Other features" textStyles="text-center" />
        <TitleText
          title={
            <>
              Explore the features you want <br className="md:block hidden" />
              to explore{" "}
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreFeatures.map((feature, index) => (
            <ExploreCard
              key={feature.id}
              {...feature}
              index={index}
              active={active}
              handleClick={setActive}
              to={feature.to}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
