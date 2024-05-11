import Button from "./button";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { RiUserFollowFill } from "react-icons/ri";
import { fadeUp } from "../assets/animation/animation";
import { motion } from "framer-motion";

const Card = ({ img, day, time, title, location, follower, link }) => {
  return (
    <motion.a
      variants={fadeUp}
      href={link}
      initial="hidden"
      whileInView={"visible"}
      whileHover="hover"
      transition={{ type: "spring" }}
      className=" mx-auto flex flex-col gap-2 col-span-4 rounded-2xl shadow-2xl overflow-hidden px-6 py-6"
    >
      <div className="rounded-2xl">
        <img src={img} alt="" className="w-full rounded-2xl" loading="lazy" />
      </div>
      <div className=" flex flex-col gap-2 px-2 pb-4">
        <p className="text-[18px] text-[#0B1223] font-bold ">{title}</p>
        <div className="text-[14px] text-[#0B1223] font-semibold flex gap-2 items-center pt-4">
          <FaClock />
          <p>{day}</p>
          <span className="w-[6px] h-[6px] bg-black rounded-full"></span>
          <p>{time}</p>
        </div>
        <p className=" text-base font-normal leading-[30px] flex gap-2 items-center">
          <FaLocationDot />
          {location}
        </p>
        <p className=" text-base font-normal leading-[30px] flex gap-2 items-center">
          <RiUserFollowFill />
          {follower} follower
        </p>
      </div>
    </motion.a>
  );
};
export default Card;
