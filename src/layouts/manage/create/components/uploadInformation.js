import progress from "../../../../assets/manage/create/EditProgress.png";
import Button from "../../../../components/button";
import { motion } from "framer-motion";
import { fadeDown } from "../../../../assets/animation/animation";

const UploadInformation = ({ eventData, handleChange, next }) => {
  return (
    <motion.div
      variants={fadeDown}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring" }}
      className="flex flex-col lg:gap-20 shadow-lg p-8 rounded-lg pt-16"
    >
      <div>
        <img src={progress} alt="" />
      </div>
      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium text-center ">
          Thông tin sự kiện
        </p>
        <div className="flex gap-2 items-center">
          <label
            htmlFor="EventName"
            className=" after:content-['*'] after:text-red-500 "
          >
            Tên sự kiện
          </label>
          <input
            placeholder="Tên sự kiện"
            id="EventName"
            name="title"
            value={eventData ? eventData.title : ""}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl w-[900px]"
          />
        </div>

        <div className=" flex items-center gap-2">
          <label
            htmlFor="event"
            className=" after:content-['*'] after:text-red-500 "
          >
            Loại sự kiện
          </label>
          <select
            id="event"
            name="category"
            value={eventData ? eventData.category : ""}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-3 "
          >
            <option>Loại sự kiện</option>
            <option value="WS">Hội nghị, Hội thảo</option>
            <option value="MUSIC">Âm nhạc và Nghệ thuật</option>
            <option value="CMT">Sự kiện Cộng đồng</option>
            <option value="SPO">Sự kiện Thể thao</option>
            <option value="EDU">Sự kiện Giáo dục</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium text-center ">
          Ngày giờ
        </p>
        <div className="flex gap-8 justify-around">
          <div className="flex flex-col gap-2 items-center lg:w-[25%]">
            <label
              htmlFor="date"
              className=" after:content-['*'] after:text-red-500 "
            >
              Ngày diễn ra
            </label>
            <input
              type="date"
              placeholder="Ngày diễn ra"
              name="date"
              onChange={handleChange}
              id="date"
              value={eventData ? eventData.date : ""}
              className="px-4 py-3 border border-gray-300 rounded-xl w-full"
            />
          </div>

          <div className=" flex flex-col items-center gap-2  lg:w-[25%]">
            <label
              htmlFor="startTime"
              className=" after:content-['*'] after:text-red-500 "
            >
              Thời gian bắt đầu
            </label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={eventData ? eventData.startTime : ""}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-xl w-full"
            />
          </div>
          <div className=" flex flex-col items-center gap-2 lg:w-[25%]">
            <label htmlFor="endTime" className="  ">
              Thời gian kết thúc
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={eventData ? eventData.endTime : ""}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-xl w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium text-center ">
          Vị trí
        </p>

        <div className="flex gap-2 items-center">
          <label
            htmlFor="location"
            className=" after:content-['*'] after:text-red-500 "
          >
            Vị trí
          </label>
          <input
            type="text"
            placeholder="Nhập vị trí diễn ra sự kiện"
            id="location"
            name="location"
            value={eventData ? eventData.location : ""}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl lg:w-[900px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className=" text-[40px] leading-[40px] font-medium text-center ">
          Mô tả sự kiện
        </p>

        <div className="flex gap-2 items-center">
          <label
            htmlFor="description"
            className=" after:content-['*'] after:text-red-500 "
          >
            Mô tả
          </label>

          <textarea
            type="text"
            placeholder="Mô tả về sự kiện"
            id="description"
            name="description"
            value={eventData ? eventData.description : ""}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-xl lg:w-[900px]"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          content={"Lưu lại và tiếp tục"}
          className={"bg-light_red px-6 py-4 rounded-lg text-white"}
          onClick={next}
        />
      </div>
    </motion.div>
  );
};
export default UploadInformation;
