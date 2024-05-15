import { motion } from "framer-motion";
import { scale } from "../../../assets/animation/animation";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import Button from "../../../components/button";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../context/authContext";

const ManageDetail = () => {
  const { eventId } = useParams();

  const [onLoading, setOnLoading] = useState(true);
  const [event, setEvent] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [previewSource, setPreviewSource] = useState("");
  const [formUpdate, setFormUpdate] = useState();
  const [isImageUpdating, setIsImageUpdating] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const inputRef = useRef();

  useEffect(() => {
    if (authContext) {
      setFormUpdate({ eventId: eventId });
    }
  }, [eventId, authContext]);

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
    setFormUpdate({ ...formUpdate, [name]: value });
  };

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/get_detail/",
        { eventId }
      );
      const { success, event, ownerInf } = response.data;

      if (success) {
        setEvent(event);
        setOwner(ownerInf);
        setOnLoading(false);
      }
    };

    getEvent();
  }, [setEvent, eventId]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const uploadImage = async () => {
    try {
      const Image = new FormData();
      Image.append("image", image);
      const UrlImage = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/upload_image/",
        // "http://localhost:4000/event/upload_image/",
        Image
      );
      const { success, data } = UrlImage.data;
      if (success) {
        setFormUpdate({ ...formUpdate, newBanner: data });
        setIsImageUpdating(false);
        console.log(formUpdate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/update_event",
        // "http://localhost:4000/event/update_event",
        formUpdate
      );
      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
        navigate(`/event/detail/${eventId}`);
      } else {
        handleError(message);
      }
      console.log(formUpdate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="container pt-24 flex flex-col gap-8">
      <div className=" overflow-hidden  flex flex-col">
        <motion.img
          src={
            onLoading ? "loading" : previewSource ? previewSource : event.banner
          }
          alt=""
          className="w-full duration-700"
          variants={scale}
          initial="hidden"
          whileHover="visible"
          onClick={() => {
            inputRef.current.click();
            setIsImageUpdating(true);
          }}
        />
        <input
          className=" hidden"
          type="file"
          ref={inputRef}
          onChange={handleFileInputChange}
        />
        {isImageUpdating ? (
          <div className=" mt-2 flex justify-center">
            <Button
              content={"Xác nhận!"}
              className={"px-3 py-2"}
              onClick={uploadImage}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className=" flex flex-col gap-8">
        <p className="text-[50px] leading [55px] font-extrabold">
          <input
            name="newTitle"
            type="text"
            className=" border"
            onChange={handleChange}
            placeholder="Nhập tiêu đề mới"
          />
        </p>
        <div className="flex justify-between">
          <motion.div className="flex flex-col gap-2 border px-8 py-4 rounded-lg shadow-xl items-center">
            <p className=" text-[25px] leading-[25px] font-bold ">Ngày, giờ</p>
            <p className="flex gap-2 pt-4 items-center">
              <FaCalendarAlt />
              <input
                name="newDate"
                type="date"
                className=" border"
                onChange={handleChange}
                placeholder="Nhập ngày mới"
              />
            </p>
            <p className="flex gap-2 items-center">
              <FaClock />
              <input
                name="newStarttime"
                type="time"
                className=" border"
                onChange={handleChange}
                placeholder="Nhập thời gian bắt đầu"
              />
            </p>
          </motion.div>
        </div>
        <div className=" flex">
          <motion.div className="border px-8 py-4 rounded-lg shadow-xl  flex flex-col items-center">
            <p className=" text-[25px] leading-[25px] font-bold pt-4">Vị Trí</p>
            <p className="flex gap-2 pt-4 items-center">
              <FaLocationDot />
              <input
                name="newLocation"
                type="text"
                className=" border"
                onChange={handleChange}
                placeholder="Nhập địa điểm"
              />
            </p>
          </motion.div>
        </div>
        <div className="flex">
          <motion.div className="border px-8 py-4 rounded-lg shadow-xl max-w-[400px] flex flex-col gap-4 items-center">
            <p className=" text-[25px] leading-[25px] font-bold pt-4 ">
              Người tổ chức
            </p>
            <div className="flex gap-4 flex-col items-center">
              <div className=" flex flex-col gap-2 items-center">
                <img
                  alt=""
                  className=" w-[40px] rounded-full"
                  src={
                    onLoading
                      ? ""
                      : owner.avatar
                      ? owner.avatar
                      : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  }
                />
                <p className="text-[20px] font-bold">
                  {onLoading ? "loading" : owner.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex flex-col gap-2 pt-4 px-8 py-4 ">
          <p className=" text-[25px] leading-[25px] font-bold">Mô tả</p>

          <textarea
            name="newDescription"
            type="text"
            onChange={handleChange}
            className=" border"
            placeholder="Nhập mô tả"
          />
        </motion.div>
      </div>

      <ToastContainer />
      <div className=" flex justify-end">
        <Button
          content={"Cập nhật"}
          className={" px-3 py-2"}
          onClick={handleUpdate}
        />
      </div>
    </section>
  );
};
export default ManageDetail;
