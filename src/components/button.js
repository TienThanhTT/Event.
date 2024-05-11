import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../assets/animation/animation";

const Button = ({
  content,
  isBackIcon = false,
  isFrontIcon = false,
  icon,
  className,
  link,
  onClick,
}) => {
  return (
    <motion.button
      variants={fadeIn}
      initial="hidden"
      whileInView={"visible"}
      whileHover={"hover"}
      transition={{ type: "spring" }}
      className={className + " rounded-full bg-primary "}
      onClick={onClick}
    >
      <Link
        to={link}
        className=" font-medium text-center flex items-center gap-2 cursor-pointer justify-center z-0"
      >
        {isFrontIcon ? <div>{icon}</div> : <></>}
        {content}
        {isBackIcon ? <div>{icon}</div> : <></>}
      </Link>
    </motion.button>
  );
};
export default Button;
