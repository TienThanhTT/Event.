import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

const CreateGroup = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className=" pt-24 flex flex-col justify-center items-center pb-4">
      <p className=" text-[30px]">Tạo nhóm</p>
      <div className=" flex gap-2 items-center">
        Tên nhóm:
        <input type="text" placeholder="Tên nhóm" />
      </div>
    </div>
  );
};
export default CreateGroup;
