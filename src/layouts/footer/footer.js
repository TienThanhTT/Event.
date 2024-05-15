import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { fadeUp } from "../../assets/animation/animation";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterNav = ["home", "blog", "contact us"];

const Footer = () => {
  return (
    <section className=" bg-[#222222] bg-center text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={"visible"}
        className="container grid grid-cols-12 py-[30px] lg:py-[50px]"
      >
        <div className="col-span-6 flex flex-col gap-8">
          <div className="">
            <Link to={"/"}>
              <span className=" text-[45px] font-bold text-white uppercase font-serif ">
                event.
              </span>
            </Link>
          </div>
          <div className="flex gap-4">
            {FooterNav.map((data, index) => (
              <li
                className=" uppercase text-sm font-semibold text-white list-none"
                key={index}
              >
                {data}
              </li>
            ))}
          </div>
        </div>
        <div className=" col-span-3 flex items-end gap-4 ">
          <li className=" list-none">
            <FaFacebook className="" />
          </li>
          <li className=" list-none">
            <FaTwitter />
          </li>
          <li className=" list-none">
            <FaInstagram />
          </li>
          <li className=" list-none">
            <FaYoutube />
          </li>
        </div>
        <div className=" col-span-3 flex items-end gap-4 ">
          <p className="flex gap-2 items-center opacity-30">
            <FaCopyright /> dangtienthanh.2024
          </p>
        </div>
      </motion.div>
    </section>
  );
};
export default Footer;
