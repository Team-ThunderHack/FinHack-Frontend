import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { navVariants } from "../assets/motion";
import { links } from "../assets/constants";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-center gap-8">
        <ul className="flex flex-1 justify-center items-center list-none gap-4 mb-5 z-10">
          {links.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 cursor-pointer uppercase font-semibold p-2 hover:text-blue-400 transition-all ease-in-out duration-300"
              onClick={() => navigate(item.to)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
