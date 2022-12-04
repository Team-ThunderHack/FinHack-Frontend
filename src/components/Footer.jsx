import { motion } from "framer-motion";

import styles from "../styles/styles";
import { footerVariants } from "../assets/motion";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import headset from "../images/headset.svg";

const socials = [
  {
    name: "twitter",
    url: twitter,
  },
  {
    name: "linkedin",
    url: linkedin,
  },
  {
    name: "instagram",
    url: instagram,
  },
  {
    name: "facebook",
    url: facebook,
  },
];

const Footer = ({ display }) => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        {display && (
          <div className="flex items-center justify-between flex-wrap gap-5">
            <h4 className="font-bold md:text-[64px] text-[44px] text-white">
              Start Learning Now
            </h4>
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
            >
              <img
                src={headset}
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                ENTER EQUITY DECODED
              </span>
            </button>
          </div>
        )}

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Equity Decoded
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Made with ❤ by Team ThunderHack.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
