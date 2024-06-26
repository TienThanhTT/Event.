import { Link, useNavigate } from "react-router-dom";
import Button from "../button";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";

const Login = () => {
  const [formLogin, setFormLogin] = useState();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState();
  const [status, setStatus] = useState();
  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/",
        {},
        { withCredentials: true }
      );

      const { status, user } = response.data;

      if (status) {
        setStatus(status);
        setUser(user);
      }
    };
    verifyCookie();
  }, []);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  useEffect(() => {
    if (status) {
      navigate("/");
      handleError("Bạn đã đăng nhập rồi!");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/login",
        formLogin,
        {
          headers: {
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "same-origin",
        }
      );

      const { success, message } = response.data;
      console.log(response.data);
      if (success === true) {
        navigate("/");

        window.scroll(0, 0);
      } else console.log(message);

      // fetch("https://event-backend-b6gm.onrender.com/login", {
      //   method: "POST",
      //   body: formLogin,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   credentials: "include",
      // }).then((data) => {
      //   console.log(data);
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" h-[100vh] bg-white flex justify-center items-center">
      <div className="  w-[50%] max-w-[800px] rounded-lg border border-gray-400 shadow-md">
        <div className="flex flex-col col-span-3 gap-6 p-4 ">
          <div className="flex flex-col items-center">
            <p className="text-[32px] font-medium">Đăng Nhập</p>
            <p className="text-base font-normal">
              Bạn chưa có tài khoản?{" "}
              <Link to={"/auth/register"} className=" underline">
                Đăng ký
              </Link>
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className=" text-base text-[#666666] ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className=" px-2 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className=" text-base text-[#666666] ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className=" px-2 py-3 border border-gray-300 rounded-lg"
              />
            </div>
          </form>

          <Button
            content={"Đăng nhập"}
            className={"px-6 py-3 bg-primary text-white "}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};
export default Login;
