import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import Button from "../../../components/button";

const OwnedGroup = () => {
  const authContext = useContext(AuthContext);
  const [userId, setUserId] = useState();
  const [group, setgroup] = useState([]);

  useEffect(() => {
    if (authContext) {
      setUserId(authContext._id);
    }
  }, [authContext]);

  useEffect(() => {
    const getGroup = async () => {
      const response = await axios
        .post("https://event-backend-b6gm.onrender.com/group/get_group", userId)
        .then((res) => {
          const { success, groups } = res.data;
          if (success) {
            setgroup(groups);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getGroup();
  });
  return (
    <div className=" pt-24 flex flex-col gap-2 ">
      <div>
        <Button
          content={"Tạo nhóm mới"}
          className={"px-3 py-2"}
          link={"/group/create"}
        />
      </div>

      <div className="bg-white shadow-md rounded-md overflow-hidden  col-span-6">
        <div className="bg-gray-100 py-2 px-4">
          <h2 className="text-xl font-semibold text-gray-800">Nhóm của bạn</h2>
        </div>
        {group.length === 0 ? (
          <p className=" text-center ">Bạn chưa tạo nhóm nào</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {group.map((group) => {
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
        )}
      </div>
    </div>
  );
};
export default OwnedGroup;
