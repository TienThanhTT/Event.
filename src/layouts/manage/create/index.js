import { useEffect, useState } from "react";
import UPloadImage from "./components/uploadImage";
import UploadInformation from "./components/uploadInformation";
import Review from "./components/review";
import { FaArrowLeft } from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreatePage() {
  const [image, setImage] = useState();
  const [step, setStep] = useState(1);
  const [eventData, setEventData] = useState();
  const [previewSource, setPreviewSource] = useState("");
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext) {
      setEventData({ owner: authContext._id });
    } else {
      navigate("/auth/login");
    }
  }, [authContext]);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
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

  const uploadImage = async () => {
    try {
      const Image = new FormData();
      Image.append("image", image);
      const UrlImage = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/upload_image/",
        Image
      );
      const { success, data } = UrlImage.data;
      if (success) {
        setEventData({ ...eventData, banner: data });
        window.scrollTo(0, 0);
        setStep(step + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadEventData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/create",

        eventData
      );
      const { success, message, event } = response.data;

      if (success) {
        handleSuccess(message);
        navigate(`/event/detail/${event._id}`);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="flex gap-12 items-center pt-24">
        {step === 1 ? (
          <FaArrowLeft
            fontSize={"30px"}
            onClick={() => {
              navigate("/");
            }}
          />
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
        <UPloadImage
          emage={image}
          handleChange={handleChange}
          handleInputChange={handleFileInputChange}
          previewSource={previewSource}
          next={uploadImage}
        />
      ) : (
        <Review
          eventData={eventData}
          image={previewSource}
          uploadData={uploadEventData}
        />
      )}
    </div>
  );
}
