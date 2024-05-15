import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";

import axios from "axios";

import ManageCard from "../components/manageCard";
import { toast } from "react-toastify";

const RegistedEvent = () => {
  const [listEvent, setListEvent] = useState([]);
  const [userId, setUserId] = useState();
  const authContext = useContext(AuthContext);
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });
  useEffect(() => {
    if (authContext) {
      setUserId(authContext._id);
    }
  }, [authContext]);

  useEffect(() => {
    const getEvent = async () => {
      await axios
        .post(
          "https://event-backend-b6gm.onrender.com/event/registed_event",
          // "http://localhost:4000/event/registed_event",
          { userId }
        )
        .then((res) => {
          const { success, events } = res.data;
          if (success) {
            setListEvent(events);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getEvent();
  }, [userId]);

  const handleDelete = async (e, eventId) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/delete_event/",
        { eventId }
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
    <div className=" px-4 py-2">
      <p className=" text-[30px] pt-20">Sự kiện bạn đã đăng ký</p>

      {listEvent ? (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-16 md:gap-4 lg:gap-8">
          {listEvent.map((data, index) => {
            return (
              <ManageCard
                img={data ? data.banner : ""}
                title={data ? data.title : ""}
                day={data ? data.date : ""}
                time={data ? data.startTime : ""}
                location={data ? data.location : ""}
                link={data ? `/event/detail/${data._id}` : ""}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
export default RegistedEvent;
