import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { navVariants } from "../assets/motion";
import { links } from "../assets/constants";
import close from "../images/close.svg";
import menu from "../images/menu.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-center gap-8">
        <ul className="sm:flex hidden flex-1 justify-center items-center list-none gap-4 lg:gap-8 lg:ml-10 mb-5 z-10">
          {links.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 text-lg cursor-pointer uppercase font-semibold p-2 hover:text-blue-400 transition-all ease-in-out duration-300"
              onClick={() => navigate(item.to)}
            >
              {item.title}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-col flex-1">
              {links.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-lg text-gray-400 uppercase font-semibold ${
                    index === links.length - 1 ? "mr-0" : "mb-4"
                  }`}
                  onClick={() => navigate(item.to)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
