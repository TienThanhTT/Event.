import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState();
  const [role, setRole] = useState();
  const [listUser, setListUser] = useState([]);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.post(
        "http://localhost:4000",
        {},
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      const { status, user, role } = data;

      setUsername(user);
      setRole(role);
      if (!status) {
        removeCookie("access_token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("access_token");
    navigate("/login");
  };

  useEffect(() => {
    const getUsers = async () => {
      const respone = await axios.get("http://localhost:4000/getUser");
      const data = respone.data;

      const { users, success } = data;

      if (success) {
        setListUser(users);
      }
    };
    getUsers();
  });

  const deleteUser = async (id) => {
    const respone = await axios.post(
      "http://localhost:4000/deleteUser",
      { id },
      { withCredentials: true }
    );
    const data = respone.data;
    console.log(data);
    const { message, success } = data;
    if (success) {
      handleSuccess(message);
    } else {
      handleError(message);
    }
  };

  return (
    <>
      <div className=" flex justify-center gap-8 flex-col items-center container">
        <h2 className="text-blue-400 text-2xl">
          {" "}
          Welcome to Dashboard <span>{username}</span>
        </h2>
        <h2>You are {role} user</h2>

        <div className=" flex flex-col gap-4">
          {listUser.map((user) => {
            return (
              <div className="flex justify-between gap-4" key={user._id}>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.role}</p>
                <button
                  className="px-2 py-2 bg-blue-400 rounded-full"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
                <button
                  className="px-2 py-2 bg-blue-400 rounded-full"
                  onClick={() => deleteUser(user._id)}
                >
                  Update role
                </button>
              </div>
            );
          })}
        </div>

        <button onClick={Logout} className="px-4 py-2 bg-gradient">
          LOGOUT
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
