import { Link, useNavigate } from "react-router-dom";
import Img from "../../assets/login-img.png";
import Button from "../button";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formRegister, setFormRegister] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formRegister);
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/signup",
        formRegister
      );

      const { success } = response.data;
      if (success === true) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className=" h-[100vh] bg-white flex justify-center items-center">
      <div className="  w-[75%] max-w-[1017px] rounded-lg border border-gray-400 shadow-md">
        <div className="grid grid-cols-5 p-8">
          <div className="flex flex-col col-span-3 gap-6 ">
            <div className="flex flex-col">
              <p className="text-[32px] font-medium">Tạo tài khoản</p>
              <p className="text-base font-normal">
                Bạn đã có tài khoản?{" "}
                <Link to={"/auth/login"} className=" underline">
                  Đăng nhập
                </Link>
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className=" text-base text-[#666666] ">
                  Họ tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className=" px-2 py-3 border border-gray-300 rounded-lg"
                />
              </div>
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
              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label
                    htmlFor="password"
                    className=" text-base text-[#666666] "
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    className=" px-2 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label
                    htmlFor="confirm_pass"
                    className=" text-base text-[#666666] "
                  >
                    Nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    id="confirm_pass"
                    name="confirm_pass"
                    className=" px-2 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </form>
            <div className="flex">
              <Button
                content={"Tạo tài khoản"}
                className={"px-6 py-3 bg-light_red "}
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="flex col-span-2 justify-end items-center rounded-lg ">
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
