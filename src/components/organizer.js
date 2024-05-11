import Button from "./button";
const OrganizerCard = ({ img, name, follower }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg col-span-2">
      <div>
        <img src={img} alt="" />
      </div>
      <p className="text-[18px] text-[#0B1223] font-bold">{name}</p>
      <p className=" text-base font-normal leading-[30px] flex gap-2 items-center">
        {follower} follower
      </p>
      <Button
        content={"Follow"}
        className={"rounded-lg bg-[#3B52FF] text-white"}
      />
    </div>
  );
};
export default OrganizerCard;
