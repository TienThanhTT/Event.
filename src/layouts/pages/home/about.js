import Button from "../../../components/button";
import { FaArrowRight } from "react-icons/fa";
import ShadowImage from "../../../components/shadowImage";
import Img from "../../../assets/about/img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../assets/animation/animation";

const About = () => {
  return (
    <section className="py-[50px] lg:py-[100px] grid grid-cols-6 lg:grid-cols-12 container">
      <div className="col-span-6 flex items-center justify-center">
        <ShadowImage img={Img} />
      </div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView={"visible"}
        transition={{ type: "spring" }}
        className="col-span-6 start-7 flex flex-col gap-8 justify-center mt-12 lg:mt-0"
      >
        <p className="text-[30px] font-bold uppercase text-center lg:text-start">
          event.
        </p>
        <p className=" text-base font-normal">
          Trang web của chúng tôi là một nền tảng đa chức năng dành cho việc tổ
          chức sự kiện, từ các sự kiện nhỏ dành cho cộng đồng địa phương đến các
          sự kiện lớn quốc tế. Với sứ mệnh đơn giản là làm cho việc tổ chức sự
          kiện trở nên dễ dàng và hiệu quả, chúng tôi cung cấp một loạt các công
          cụ và tính năng giúp người dùng tạo ra những sự kiện đáng nhớ.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            content={"Tìm hiểu thêm"}
            className={"bg-[#381DDB] rounded-lg px-3 py-2 text-white"}
            isBackIcon={true}
            icon={<FaArrowRight />}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default About;
