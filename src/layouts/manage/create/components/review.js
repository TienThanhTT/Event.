import { motion } from "framer-motion";
import progress from "../../../../assets/manage/create/ReviewProgress.png";
import {
  fadeDown,
  fadeOut,
  scale,
} from "../../../../assets/animation/animation";
import Button from "../../../../components/button";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext";

const Review = ({ eventData, image, uploadData }) => {
  const authContext = useContext(AuthContext);
  return (
    <motion.div
      variants={fadeDown}
      initial="hidden"
      whileInView={"visible"}
      transition={{ type: "spring" }}
      className="flex flex-col lg:gap-20 lg:pt-16 "
    >
      <div>
        <img src={progress} alt="" />
      </div>
      <p className=" text-2xl font-normal">Kiểm tra lại thông tin!</p>
      <div className=" border border-black rounded-2xl p-8">
        <section className="container flex flex-col gap-8">
          <div className=" overflow-hidden max-h-[100vh]">
            <motion.img
              src={image}
              alt=""
              className="w-full duration-700"
              variants={scale}
              initial="hidden"
              whileHover="visible"
            />
          </div>
          <div className=" flex flex-col gap-8">
            <p className="text-[50px] leading [55px] font-extrabold">
              {eventData ? eventData.title : ""}
            </p>
            <div className="flex justify-between">
              <motion.div
                variants={fadeOut}
                initial="hidden"
                whileInView={"visible"}
                whileHover="hover"
                transition={{ type: "spring" }}
                className="flex flex-col gap-2 border px-8 py-4 rounded-lg shadow-xl"
              >
                <p className=" text-[25px] leading-[25px] font-bold ">
                  Ngày, giờ
                </p>
                <p className="flex gap-2 pt-4 items-center">
                  <FaCalendarAlt />
                  {eventData ? eventData.date : ""}
                </p>
                <p className="flex gap-2 items-center">
                  <FaClock />
                  {eventData ? eventData.startTime : ""}
                </p>
              </motion.div>
              <div>
                <Button
                  content={"Tham gia"}
                  className={"px-8 py-3 bg-[#3B52FF] text-white rounded-lg"}
                />
              </div>
            </div>
            <motion.div
              variants={fadeOut}
              initial="hidden"
              whileInView={"visible"}
              whileHover="hover"
              transition={{ type: "spring" }}
              className="border px-8 py-4 rounded-lg shadow-xl max-w-[400px]"
            >
              <p className=" text-[25px] leading-[25px] font-bold pt-4">
                Vị Trí
              </p>
              <p className="flex gap-2 pt-4 items-center">
                <FaLocationDot />

                {eventData ? eventData.location : ""}
              </p>
            </motion.div>
            <motion.div
              variants={fadeOut}
              initial="hidden"
              whileInView={"visible"}
              whileHover="hover"
              transition={{ type: "spring" }}
              className="border px-8 py-4 rounded-lg shadow-xl max-w-[400px] flex flex-col gap-4"
            >
              <p className=" text-[25px] leading-[25px] font-bold pt-4 ">
                Người tổ chức
              </p>
              <div className="flex gap-4">
                <div>
                  <img alt="" />
                </div>
                <div className=" flex flex-col gap-2 items-center">
                  <p className="text-[20px] font-bold">
                    {authContext ? authContext.name : ""}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="flex flex-col gap-2 pt-4 px-8 py-4 ">
              <p className=" text-[25px] leading-[25px] font-bold">Mô tả</p>
              <p className="">{eventData ? eventData.description : ""}</p>
            </motion.div>
          </div>
        </section>
      </div>
      <div className="flex justify-end mb-8">
        <Button
          content={"Tạo sự kiện"}
          className={"bg-light_red px-6 py-4 rounded-lg text-white"}
          onClick={uploadData}
        />
      </div>
    </motion.div>
  );
};
export default Review;
