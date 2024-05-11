import { motion } from "framer-motion";
import { appear } from "../assets/animation/animation";

const ShadowImage = ({ img }) => {
  return (
    <motion.div
      variants={appear}
      initial="hidden"
      whileInView="visible"
      transition={{ type: "spring" }}
      className="relative animate-move "
    >
      <div className=" relative drop-shadow-2xl">
        <img src={img} alt="" className=" opacity-20 shadow-lg" />
        <div className="absolute opacity-100 top-12 left-12 shadow-lg rounded-2xl">
          <img src={img} alt="" className="drop-shadow-xl" />
        </div>
      </div>
    </motion.div>
  );
};
export default ShadowImage;
