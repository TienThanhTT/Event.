import Button from "../../../../components/button";
import progress from "../../../../assets/manage/create/BannerProgress.png";
import { motion } from "framer-motion";
import { fadeDown } from "../../../../assets/animation/animation";
import { useState } from "react";

const UPloadImage = ({ handleChange, next }) => {
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
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
            onChange={handleFileInputChange}
            formEncType="multipart/form-data"
            className="px-4 py-3 border border-gray-300 rounded-xl w-[900px]"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        {previewSource ? (
          <img
            src={previewSource}
            className=" w-[70%] lg:max-w-[700px]"
            alt=""
          />
        ) : (
          <></>
        )}
      </div>

      <div className="flex justify-end pt-8">
        <Button
          content={"Lưu lại và tiếp tục"}
          className={" px-6 py-4 rounded-lg text-white"}
          // onClick={handleSubmitFile}
        />
      </div>
    </motion.div>
  );
};
export default UPloadImage;
