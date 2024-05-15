import Button from "../../../../components/button";
import { FaArrowRight } from "react-icons/fa";

import Card from "../../../../components/card";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../assets/animation/animation";

const ListEvent = ({ ListMusicEvent }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-20 py-[50px] lg:py-[100px] ">
        <div className="flex justify-between">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView={"visible"}
            transition={{ type: "spring" }}
            className="text-[20px] text-[#0B1223] font-bold lg:text-[40px]"
          >
            EVENT
          </motion.div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-16 md:gap-4 lg:gap-8">
          {ListMusicEvent.map((data) => {
            return (
              <Card
                img={data.banner}
                title={data.title}
                day={data.date}
                time={data.startTime}
                location={data.location}
                follower={data.group}
                link={`/event/detail/${data._id}`}
                key={data._id}
              />
            );
          })}
        </div>
        <div className=" lg:hidden flex justify-center">
          <Button
            content="More Events"
            width="max-w-[188px]"
            className={"bg-[#3B52FF] text-white"}
            isBackIcon={true}
            icon={<FaArrowRight />}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};
export default ListEvent;
