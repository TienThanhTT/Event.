import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventManage = () => {
  const eventId = useParams();

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [registeredGroups, setRegisteredGroups] = useState([]);
  const [event, setEvent] = useState();

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/get_detail",
        // "http://localhost:4000/event/get_participant",
        eventId
      );
      const { success, registeredUsers, registeredGroups, event } =
        response.data;

      if (success) {
        setRegisteredUsers(registeredUsers);
        setRegisteredGroups(registeredGroups);
        setEvent(event);
      }
    };

    getEvent();
  }, [eventId]);

  return (
    <>
      <p className="pt-24 text-[30px] text-black text-center">
        {event ? event.title : "Không tìm thấy tên sự kiện"}
      </p>
      <div className="  container pb-4 grid grid-cols-12 gap-2">
        <div className="bg-white shadow-md rounded-md overflow-hidden col-span-6">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Danh sách người tham gia({" "}
              {registeredUsers ? registeredUsers.length : ""} )
            </h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {registeredUsers.map((user) => {
              return (
                <li className="flex items-center py-4 px-6">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={
                      user.avatar
                        ? user.avatar
                        : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    }
                    alt="User avatar"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {user.name}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden  col-span-6">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Danh sách nhóm tham gia( {registeredGroups.length} )
            </h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {registeredGroups.map((group) => {
              return (
                <li className="flex items-center py-4 px-6">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={
                      group.avatar
                        ? group.avatar
                        : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    }
                    alt="User avatar"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {group.name}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default EventManage;
