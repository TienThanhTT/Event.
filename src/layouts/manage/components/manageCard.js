import { FaLocationDot, FaClock } from "react-icons/fa6";

import { fadeUp } from "../../../assets/animation/animation";
import { motion } from "framer-motion";
import Button from "../../../components/button";

const ManageCard = ({
  img,
  day,
  time,
  title,
  location,
  link,
  buttonLink,
  handleDelete,
}) => {
  return (
    <motion.a
      variants={fadeUp}
      href={link}
      initial="hidden"
      whileInView={"visible"}
      whileHover="hover"
      transition={{ type: "spring" }}
      className=" mx-auto flex flex-col  col-span-4 rounded-2xl shadow-2xl overflow-hidden px-6 py-6 justify-between"
    >
      <div className="rounded-2xl">
        <img src={img} alt="" className="w-full rounded-2xl" loading="lazy" />
      </div>
      <div className=" flex flex-col gap-2 px-2 pb-4">
        <p className="text-[18px] text-[#0B1223] font-bold ">{title}</p>
        <div className="text-[14px] text-[#0B1223] font-semibold flex gap-2 items-center pt-4">
          <FaClock />
          <p className=" m-0">{day}</p>
          <span className="w-[6px] h-[6px] bg-black rounded-full"></span>
          <p className=" m-0">{time}</p>
        </div>
        <p className=" text-base font-normal leading-[30px] flex gap-2 items-center m-0">
          <FaLocationDot />
          {location}
        </p>
      </div>

      <div className=" flex justify-between">
        <Button
          content={"Chỉnh sửa"}
          link={buttonLink}
          className={"px-2 py-1"}
        />

        <Button
          content={"Xóa"}
          className={"px-2 py-1 "}
          onClick={handleDelete}
        />
      </div>
    </motion.a>
  );
};
export default ManageCard;
