import { motion } from "framer-motion";

import { TypingText } from "../components";
import styles from "../styles/styles";
import { fadeIn, staggerContainer } from "../assets/motion";
import arrow from "../images/arrow-down.svg";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Equity Decoded" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Equity decoded </span>
          is a tool for complete begineers to learn and trade in the stock
          market. We provide a learning track where users can learn about
          <span className="font-extrabold text-white">
            {" "}
            fundamental analysis, technical analysis and stock market data
            analysis.{" "}
          </span>
          Once a user gets acquainted with stock market and terms, it requires
          him her to gain practical knowledge by
          <span className="font-extrabold text-white"> trading </span>
          and so we suggest trades based on
          <span className="font-extrabold text-white">
            {" "}
            intraday index breakout strategy{" "}
          </span>
          and this is a low medium return strategy which the user can apply to
          gain practical experience. Once the user gets practical exp then he
          she will formulate his own trading strategy and for this they need to
          do
          <span className="font-extrabold text-white">
            {" "}
            stock market data analysis{" "}
          </span>
          on every day basis but for many working professionals they do not get
          time for this and so we provide{" "}
          <span className="font-extrabold text-white">
            {" "}
            options dashboard{" "}
          </span>{" "}
          which can help them see the summarised data in very less time.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src={arrow}
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
