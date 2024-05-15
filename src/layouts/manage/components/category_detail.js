import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../../components/card";
import { FaArrowLeft } from "react-icons/fa6";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const [listEvent, setListEvent] = useState([null]);
  const navigate = useNavigate();
  useEffect(() => {
    const getCategoryEvent = async () => {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/get_event",
        { categoryId },
        {
          withCredentials: true,
        }
      );
      const { success, events } = response.data;
      if (success) {
        setListEvent(events);
      }
    };
    getCategoryEvent();
  }, [categoryId]);

  return (
    <div className=" container pt-24 flex flex-col gap-8 py-4">
      <div className=" flex flex-col">
        <p className=" font-bold text-[30px] leading-[35px] flex gap-2">
          <FaArrowLeft
            fontSize={"30px"}
            onClick={() => {
              navigate("/");
            }}
          />
          Event Category: {categoryId}
        </p>
      </div>
      {listEvent === null ? (
        <></>
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-16 md:gap-4 lg:gap-8">
          {listEvent.map((data, index) => {
            return (
              <Card
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
      )}
    </div>
  );
};
export default CategoryDetail;
