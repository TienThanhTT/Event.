import { motion } from "framer-motion";
import { fadeOut, scale } from "../../../assets/animation/animation";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import Button from "../../../components/button";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../context/authContext";

const Detail = () => {
  const { eventId } = useParams();

  const [onLoading, setOnLoading] = useState(true);
  const [event, setEvent] = useState();
  const [owner, setOwner] = useState();
  const [handleClick, setHandleClick] = useState(false);
  const authContext = useContext(AuthContext);
  const [userJoinData, setUserJoinData] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    if (authContext) {
      setUser(authContext._id);
      setUserJoinData([eventId, user]);
    }
  }, [authContext, eventId, user]);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

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

  // const getGroups = async () => {
  //   const response = await axios.post(
  //     "https://event-backend-b6gm.onrender.com/group/get_group",
  //     userId
  //   );
  //   const data = response.data;
  //   console.log(data);
  // };

  const handleJoinEvent = async (e) => {
    try {
      setUserJoinData([...userJoinData, authContext._id]);
      e.preventDefault();

      console.log(userJoinData);
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/join_event/",
        // "http://localhost:4000/event/join_event/",
        userJoinData
      );
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
    <section className="container pt-24 flex flex-col gap-8">
      <div className=" overflow-hidden max-h-[100vh]">
        <motion.img
          src={onLoading ? "loading" : event.banner}
          alt=""
          className="w-full duration-700"
          variants={scale}
          initial="hidden"
          whileHover="visible"
        />
      </div>
      <div className=" flex flex-col gap-8">
        <p className="text-[50px] leading [55px] font-extrabold">
          {onLoading ? "loading" : event.title}
        </p>
        <div className="flex justify-between">
          <motion.div className="flex flex-col gap-2 border px-8 py-4 rounded-lg shadow-xl items-center">
            <p className=" text-[25px] leading-[25px] font-bold ">Ngày, giờ</p>
            <p className="flex gap-2 pt-4 items-center">
              <FaCalendarAlt />
              {onLoading ? "loading" : event.date}
            </p>
            <p className="flex gap-2 items-center">
              <FaClock />
              {onLoading ? "loading" : event.startTime}
            </p>
          </motion.div>
          <div className=" relative" id="join_button">
            <Button
              content={"Tham gia"}
              className={"px-8 py-3 bg-[#3B52FF] text-white rounded-lg"}
              onClick={() => {
                setHandleClick(!handleClick);
              }}
            />
          </div>
          <Tooltip
            anchorSelect="#join_button"
            clickable
            openOnClick={true}
            style={{ backgroundColor: "white" }}
          >
            <div className="  bg-white rounded-md shadow-md flex flex-col text-black  ">
              <p className=" p-3 font-semibold border-b border-gray-400">
                Bạn đăng ký cho 1 mình bạn hay cho một nhóm?
              </p>
              <ul className=" flex flex-col ">
                <li
                  className=" px-2 py-2 hover:bg-gray-300 border-b border-gray-300 cursor-pointer"
                  onClick={handleJoinEvent}
                >
                  Cá nhân
                </li>

                <li
                  className=" px-2 py-2 hover:bg-gray-300  border-b border-gray-300 cursor-pointer"
                  // onClick={getGroups}
                >
                  Nhóm
                </li>
              </ul>
            </div>
          </Tooltip>
        </div>
        <div className=" flex">
          <motion.div className="border px-8 py-4 rounded-lg shadow-xl  flex flex-col items-center">
            <p className=" text-[25px] leading-[25px] font-bold pt-4">Vị Trí</p>
            <p className="flex gap-2 pt-4 items-center">
              <FaLocationDot />
              {onLoading ? "loading" : event.location}
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
          <p className="">{onLoading ? "loading" : event.description}</p>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  );
};
export default Detail;
