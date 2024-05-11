import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState();
  const [role, setRole] = useState();

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
      console.log(user);
      setUsername(user);
      setRole(role);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("access_token");
    navigate("/login");
  };

  return (
    <>
      <div className=" flex justify-center gap-8 flex-col items-center">
        <h2 className="text-blue-400 text-2xl">
          {" "}
          Welcome <span>{username}</span>
        </h2>
        <h2>You are {role} user</h2>

        <button onClick={Logout} className="px-4 py-2 bg-gradient">
          LOGOUT
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
