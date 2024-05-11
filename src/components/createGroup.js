import { fadeDown } from "../assets/animation/animation";
import { motion } from "framer-motion";
import Button from "./button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateGroup = ({ user }) => {
  const [groupData, setGroupData] = useState({ leader: user._id });

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData({ ...groupData, [name]: value });
  };

  const uploadGroupData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:4000/group/create", {
        ...groupData,
      });
      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
      className="flex flex-col lg:gap-20 lg:pt-24 shadow-lg p-8 "
    >
      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium text-center uppercase ">
          Tạo nhóm mới
        </p>
        <div className="flex gap-2 items-center justify-center">
          <label
            htmlFor="GroupName"
            className=" after:content-['*'] after:text-red-500 "
          >
            Tên nhóm
          </label>
          <input
            placeholder="Tên nhóm"
            id="GroupName"
            name="name"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl w-[900px]"
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <label htmlFor="des" className="  ">
            Mô tả
          </label>

          <textarea
            name="des"
            id="des"
            placeholder="Mô tả"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl w-[900px]"
          />
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <Button
          content={"Tạo nhóm"}
          onClick={uploadGroupData}
          className={" px-6 py-4 rounded-lg text-white"}
        />
      </div>
    </motion.div>
  );
};

export default CreateGroup;
