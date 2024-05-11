import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        { ...inputValue },
        { withCredentials: true }
      );

      const data = response.data;

      const { success, message, user } = data;
      console.log(user);

      if (success) {
        if (user.role === "admin") {
          handleSuccess(message);
          navigate("/dashboard");
        }
        if (user.role === "basic") {
          handleSuccess(message);

          navigate("/");
        }
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-gradient">
      <div className=" flex flex-col max-w-[80%] gap-8">
        <h1 className=" text-center text-2xl text-blue-400">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleOnChange}
            className="py-2 px-4 rounded-lg"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleOnChange}
            className="py-2 px-4 rounded-lg"
          />
          <button type="submit" className=" bg-gradient rounded-full py-2">
            Login
          </button>
          <span>
            Don't have an account? <Link to={"/signup"}>Sign up</Link>
          </span>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
