import { useEffect, useState } from "react";
import UPloadImage from "./components/uploadImage";
import UploadInformation from "./components/uploadInformation";
import Review from "./components/review";
import { FaArrowLeft } from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../../../service/auth/authContext";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../../../../image-event");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });
// const upload = multer({ storage });

export default function CreatePage() {
  const [image, setImage] = useState("");
  const [step, setStep] = useState(1);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext) {
      setEventData({ owner: authContext._id });
    }
  }, [authContext]);
  const [eventData, setEventData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const next = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const previous = () => {
    if (step === 1) {
      return step;
    }
    setStep(step - 1);
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const uploadEventData = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://localhost:4000/event/create", {
      //   ...eventData,
      // });
      // const data = response.data;

      console.log(eventData);
    } catch (error) {
      console.log(error);
    }
    console.log(eventData);
  };

  return (
    <div className="container">
      <div className="flex gap-12 items-center pt-24">
        {step === 1 ? (
          <></>
        ) : (
          <FaArrowLeft fontSize={"30px"} onClick={previous} />
        )}
        <p className=" text-[48px] leading-[48px] font-bold ">
          Tạo sự kiện mới
        </p>
      </div>
      {step === 1 ? (
        <UploadInformation
          eventData={eventData}
          handleChange={handleChange}
          next={next}
        />
      ) : step === 2 ? (
        <UPloadImage emage={image} handleChange={onImageChange} next={next} />
      ) : (
        <Review
          eventData={eventData}
          image={image}
          uploadData={uploadEventData}
        />
      )}
    </div>
  );
}
