const { default: axios } = require("axios");

export const getMusicEvent = () => {
  try {
    axios
      .post(
        "http://localhost:4000/event/get_event/",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
