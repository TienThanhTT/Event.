import Button from "../../../../components/button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeDown } from "../../../../assets/animation/animation";

const Banner = () => {
  return (
    <section className=" bg-section1_background bg-center overflow-y-scroll bg-fixed h-[100vh] bg-opacity-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-center flex flex-col items-center gap-12 lg: max-w-[970px]">
        <motion.p
          variants={fadeDown}
          initial="hidden"
          whileInView={"visible"}
          transition={{ type: "spring" }}
          className=" md:text-[40px] lg:text-[55px] lg:leading-[60px] 2xl:text-[72px] 2xl:leading-[72px] text-white text-center font-bold uppercase"
        >
          quản lý <span className=" text-primary">sự kiện</span> thật dễ dàng!
        </motion.p>
        <motion.p
          variants={fadeDown}
          initial="hidden"
          whileInView={"visible"}
          transition={{ type: "spring" }}
          className=" text-lg lg:text-2xl text-white font-semibold"
        >
          Trang web của chúng tôi là một nền tảng đa chức năng giúp tổ chức sự
          kiện dễ dàng và hiệu quả. Tạo, quản lý và quảng bá sự kiện một cách
          thuận tiện với giao diện thân thiện và các tính năng linh hoạt.
        </motion.p>
        <div className="z-0">
          <Button
            content="Create event"
            className={" bg-light_red rounded-lg text-white px-8 py-4"}
            isBackIcon={true}
            icon={<FaArrowRight />}
            link="/manage/create"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
