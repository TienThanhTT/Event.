import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../../../assets/animation/animation";
import Button from "../../../components/button";

const Search = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileInView={"visible"}
      className="flex justify-center "
    >
      <div className=" bg-white rounded-xl w-[70%] shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)] border flex gap-8 justify-center items-center py-6 relative -top-10">
        <input
          className="shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)] border text-black border-[#E9EAEE] rounded-lg py-3 px-4 w-[30%] bg-[#f8f7fa] cursor-text flex gap-4 items-center "
          placeholder="Search Events"
        />

        <div className="">
          <input
            type="date"
            className="shadow-[0_0_20px_-4px_RGBA(0,0,0,0.1)] border border-[#E9EAEE] bg-[#f8f7fa] py-3 px-4 rounded-lg"
            placeholder="Select date"
          />
        </div>

        <div>
          <Button
            content={"Tìm kiếm"}
            isFrontIcon={true}
            icon={<FaSearch />}
            className={"p-3 bg-[#3B52FF] rounded-full text-white"}
          />
        </div>
      </div>
    </motion.section>
  );
};
export default Search;
