import React, { useContext, useEffect, useRef, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { AuthContext } from "../../../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const fileInputRef = useRef();
  const authContext = useContext(AuthContext);
  const [image, setImage] = useState();
  const [previewSource, setPreviewSource] = useState("");
  const [formUpdate, setFormUpdate] = useState();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isImageUpdating, setIsImageUpdating] = useState(false);
  const [user, setUser] = useState("loading");
  useEffect(() => {
    if (authContext) {
      setUser(authContext);
      setFormUpdate({ id: authContext._id });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUpdate({ ...formUpdate, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(
        // "https://event-backend-b6gm.onrender.com/update_user"
        "http://localhost:4000/update_user",
        formUpdate
      );
      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
      } else {
        handleError(message);
      }
      console.log(formUpdate);
    } catch (error) {
      console.log(error);
    }
  };

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
  const uploadImage = async () => {
    try {
      const Image = new FormData();
      Image.append("image", image);
      const UrlImage = await axios.post(
        "https://event-backend-b6gm.onrender.com/event/upload_image/",
        // "http://localhost:4000/event/upload_image/",
        Image
      );
      const { success, data } = UrlImage.data;
      if (success) {
        setFormUpdate({ ...formUpdate, newAvatar: data });
        console.log(formUpdate);
        setIsImageUpdating(false);
        setIsUpdating(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section style={{ backgroundColor: "#eee" }} className=" pt-20 ">
      <MDBContainer className="py-5">
        <MDBRow className=" flex justify-center">
          <MDBCol lg="10">
            <MDBCard className="mb-4">
              <div className=" flex justify-center">
                <MDBCardImage
                  src={
                    user.avatar
                      ? user.avatar
                      : previewSource
                      ? previewSource
                      : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  }
                  alt="avatar"
                  className="rounded-circle py-2"
                  style={{ width: "150px", height: "150px" }}
                  fluid
                  onClick={() => {
                    fileInputRef.current.click();
                    setIsImageUpdating(true);
                    setIsUpdating(true);
                  }}
                />
                <input
                  onChange={handleFileInputChange}
                  multiple={false}
                  ref={fileInputRef}
                  type="file"
                  hidden
                />
              </div>
              {isImageUpdating ? (
                <div className=" flex justify-center">
                  <MDBBtn color="success" onClick={uploadImage}>
                    Chọn ảnh
                  </MDBBtn>
                </div>
              ) : (
                <></>
              )}

              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.name}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {user.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {isUpdating ? (
                      <MDBInput
                        //   onChange={(e) => setValue(e.target.value)}
                        label="Cập nhật thông tin"
                        id="controlledValue"
                        type="text"
                        name="newPhone"
                        onChange={handleChange}
                      />
                    ) : user.phone ? (
                      <MDBCardText className="text-muted">
                        {user.phone}
                      </MDBCardText>
                    ) : (
                      <MDBInput
                        //   onChange={(e) => setValue(e.target.value)}
                        label="Cập nhật thông tin"
                        id="controlledValue"
                        type="text"
                        name="newPhone"
                        onChange={handleChange}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    {isUpdating ? (
                      <MDBInput
                        //   onChange={(e) => setValue(e.target.value)}
                        label="Cập nhật thông tin"
                        id="controlledValue"
                        type="text"
                        name="newAddress"
                        onChange={handleChange}
                      />
                    ) : user.address ? (
                      <MDBCardText className="text-muted">
                        {user.address}
                      </MDBCardText>
                    ) : (
                      <MDBInput
                        //   onChange={(e) => setValue(e.target.value)}
                        label="Cập nhật thông tin"
                        id="controlledValue"
                        type="text"
                        name="newAddress"
                        onChange={handleChange}
                      />
                    )}
                  </MDBCol>
                </MDBRow>
                <hr />
                <div className=" flex justify-end">
                  {isUpdating ? (
                    <>
                      <MDBBtn onClick={handleUpdate}>Cập nhật</MDBBtn>{" "}
                      <MDBBtn
                        className="mx-2"
                        color="danger"
                        onClick={() => {
                          setIsUpdating(false);
                          setIsImageUpdating(false);
                        }}
                      >
                        Hủy
                      </MDBBtn>
                    </>
                  ) : (
                    <MDBBtn
                      onClick={() => {
                        setIsUpdating(true);
                      }}
                    >
                      Chỉnh sửa
                    </MDBBtn>
                  )}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
