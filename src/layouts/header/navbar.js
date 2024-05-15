import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoIosLogIn, IoMdArrowDropdownCircle } from "react-icons/io";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeDown, fadeIn } from "../../assets/animation/animation";

import { useCookies } from "react-cookie";
import { FaUser } from "react-icons/fa";
import { MDBCardImage } from "mdb-react-ui-kit";
import axios from "axios";

const NavData = [
  { title: "Home", link: "/" },
  { title: "About", link: "/" },
  { title: "Create event", link: "manage/create" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
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

  const openMenu = () => {
    setOpenNav(!openNav);
  };
  const openAuthMenu = () => {
    setOpenAuth(!openAuth);
  };
  const handleLogout = () => {
    removeCookie("access_token");
    window.location.reload();
  };

  return (
    <header className="fixed flex flex-col justify-center items-center w-full z-50 bg-background">
      <motion.div
        className={
          " w-full flex justify-between py-[10px] px-[15px] lg:flex-row gap-4 text-white "
        }
        variants={fadeDown}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring" }}
      >
        <Link to={"/"}>
          <span className=" text-[30px] font-bold text-white uppercase font-serif ">
            event.
          </span>
        </Link>

        <div className="lg:flex lg:flex-row flex-col lg:items-center hidden uppercase ">
          {NavData.map((data, index) => {
            return (
              <li
                className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:scale-105 hover:text-[#3B52FF] "
                key={index}
              >
                <Link className="text-white" to={data.link}>
                  {data.title}{" "}
                </Link>
              </li>
            );
          })}
        </div>
        {status ? (
          <div className="lg:flex items-center gap-2 hidden text-white">
            {/* <div className=" flex items-center gap-2">
              <FaUser />
              {user.name}
            </div> */}

            <MDBCardImage
              src={
                user.avatar
                  ? user.avatar
                  : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              }
              alt="avatar"
              className="rounded-circle py-2"
              style={{ width: "30px" }}
              fluid
            />
            <div className="relative ">
              <IoMdArrowDropdownCircle onClick={openAuthMenu} />
              <motion.ul
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                className={
                  openAuth
                    ? "flex flex-col  justify-center z-50 bg-white absolute right-2 top-10 p-2 w-[250px] rounded-lg text-black shadow-md"
                    : "hidden"
                }
              >
                <li className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:text-[#3B52FF] hover:bg-gray-200">
                  <Link to={"/profile"}>View profile</Link>
                </li>
                <li className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:text-[#3B52FF] hover:bg-gray-200">
                  <Link to={"/manage"}>Manage</Link>
                </li>
                <li
                  className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:text-[#3B52FF] hover:bg-gray-200"
                  onClick={handleLogout}
                >
                  Log out
                </li>
              </motion.ul>
            </div>
          </div>
        ) : (
          <div className=" list-none text-[16px] font-normal relative lg:flex gap-4 hidden">
            <Link
              to={"/auth/login"}
              className="flex items-center gap-1 cursor-pointer hover:text-[#3B52FF]"
            >
              <IoIosLogIn /> Login
            </Link>
            <Link
              to={"/auth/register"}
              className="flex items-center gap-1 cursor-pointer hover:text-[#3B52FF] bg-primary rounded-lg text-black px-2 py-2"
            >
              <MdOutlineAccountBalanceWallet /> Signup
            </Link>
          </div>
        )}

        <button className=" lg:hidden block" onClick={openMenu}>
          <FaBars size="24px" />
        </button>
      </motion.div>

      {/* mobile */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        className={
          openNav
            ? "flex flex-col gap-4 justify-center z-50 bg-white absolute right-2 top-12 w-[250px] rounded-lg "
            : "hidden "
        }
      >
        {NavData.map((data, index) => {
          return (
            <li
              className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:scale-105 hover:text-[#3B52FF] hover:bg-gray-200 "
              key={index}
            >
              <Link to={data.link}>{data.title} </Link>
            </li>
          );
        })}
        {status ? (
          <Link className="flex gap-2 px-3 py-2">
            {user.name}
            <img src={user.avatar} alt="" />
          </Link>
        ) : (
          <>
            <li className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:scale-105 hover:text-[#3B52FF] hover:bg-gray-200 ">
              <Link to={"auth/login"} className="flex items-center gap-2">
                <IoIosLogIn /> Login
              </Link>
            </li>
            <li className="flex items-center gap-2 list-none text-[16px] font-normal rounded-xl relative px-3 py-2 hover:scale-105 hover:text-[#3B52FF] hover:bg-gray-200 ">
              <Link to={"auth/register"} className="flex items-center gap-2">
                <MdOutlineAccountBalanceWallet /> Signup
              </Link>
            </li>
          </>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;
