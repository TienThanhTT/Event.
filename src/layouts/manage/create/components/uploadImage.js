import Button from "../../../../components/button";
import progress from "../../../../assets/manage/create/BannerProgress.png";
import { motion } from "framer-motion";
import { fadeDown } from "../../../../assets/animation/animation";
import { useState } from "react";
import axios from "axios";

const UPloadImage = ({ handleChange, next }) => {
  const [image, setImage] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    // const response = await axios.post(
    //   "http://localhost:4000/event/upload_image/",
    //   formData,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  return (
    <motion.div
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
      className="flex flex-col lg:gap-20 lg:pt-16 shadow-lg p-8 "
    >
      <div>
        <img src={progress} alt="" />
      </div>
      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium ">
          Banner sự kiện
        </p>
        <div className="flex gap-2 items-center">
          <label
            htmlFor="banner"
            className=" after:content-['*'] after:text-red-500 "
          >
            Chọn file Banner
          </label>
          <input
            type="file"
            placeholder="Tên sự kiện"
            id="banner"
            accept="image/*"
            name="banner"
            onChange={onInputChange}
            formEncType="multipart/form-data"
            className="px-4 py-3 border border-gray-300 rounded-xl w-[900px]"
          />
        </div>
      </div>

      <div className="flex justify-end pt-8">
        <Button
          content={"Lưu lại và tiếp tục"}
          className={" px-6 py-4 rounded-lg text-white"}
          onClick={onSubmit}
        />
      </div>
    </motion.div>
  );
};
export default UPloadImage;
