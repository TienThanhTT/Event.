import { FaBook, FaMusic } from "react-icons/fa6";
import { motion } from "framer-motion";
import { appear } from "../../../assets/animation/animation";
import { FaPeopleGroup, FaEarthAsia, FaFootball } from "react-icons/fa6";

const CategoryData = [
  {
    icon: <FaPeopleGroup className=" text-orange-400" />,
    title: "Hội nghị, Hội thảo",
    des: `Sự kiện mà một nhóm người có chung quan tâm đến một chủ đề hay
        ngành nghề cụ thể tụ họp để chia sẻ kiến thức, trải nghiệm, và
        mạng lưới.`,
    background: " bg-[#DB841D] bg-opacity-10 ",
    delay: 0,
  },
  {
    icon: <FaMusic className=" text-red-400" />,
    title: "Âm nhạc và Nghệ thuật",
    des: `Sự kiện mà một nhóm người có chung quan tâm đến một chủ đề hay
        ngành nghề cụ thể tụ họp để chia sẻ kiến thức, trải nghiệm, và
        mạng lưới.`,
    background: " bg-[#FC5252] bg-opacity-10 ",
    delay: 0.1,
  },
  {
    icon: <FaEarthAsia className=" text-white" />,
    title: "Sự kiện Cộng đồng",
    des: `Sự kiện mà một nhóm người có chung quan tâm đến một chủ đề hay
        ngành nghề cụ thể tụ họp để chia sẻ kiến thức, trải nghiệm, và
        mạng lưới.`,
    background: " bg-[#381DDB] text-white ",
    delay: 0.2,
  },
  {
    icon: <FaFootball className=" text-purple-600" />,
    title: "Sự kiện Thể thao",
    des: `Sự kiện mà một nhóm người có chung quan tâm đến một chủ đề hay
        ngành nghề cụ thể tụ họp để chia sẻ kiến thức, trải nghiệm, và
        mạng lưới.`,
    background: " bg-[#C00096] bg-opacity-10 ",
    delay: 0.3,
  },
  {
    icon: <FaBook className=" text-blue-300" />,
    title: "Sự kiện Giáo dục",
    des: `Sự kiện mà một nhóm người có chung quan tâm đến một chủ đề hay
        ngành nghề cụ thể tụ họp để chia sẻ kiến thức, trải nghiệm, và
        mạng lưới.`,
    background: " bg-[#84C4FF] bg-opacity-10 ",
    delay: 0.4,
  },
];

const Category = () => {
  return (
    <section className="flex flex-col gap-12 py-[50px] lg:py-[100px]">
      <div className="container">
        <motion.p
          variants={appear}
          initial="hidden"
          whileInView={"visible"}
          transition={{ type: "spring" }}
          exit={"exit"}
          className=" text-[34px] font-extrabold uppercase"
        >
          <span className="text-[#381DDB]">loại</span> sự kiện
        </motion.p>
      </div>
      <div className="grid grid-cols-5 gap-4 px-2 cursor-pointer">
        {CategoryData.map((data) => {
          return (
            <motion.div
              variants={appear}
              initial="hidden"
              whileInView={"visible"}
              whileHover={"hover"}
              transition={{ type: "spring", delay: data.delay }}
              className={
                "col-span-1 flex px-4 pb-4 pt-10  flex-col gap-2 rounded-xl" +
                data.background
              }
              key={data.delay}
            >
              {data.icon}
              <p className=" text-xl font-extrabold">{data.title} </p>
              <p className=" text-base font-normal opacity-70">{data.des}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Category;
