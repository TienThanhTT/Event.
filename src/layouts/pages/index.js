import Banner from "./home/banner";
import ListEvent from "./home/listEvent";

import Search from "./home/search";
import Category from "./home/category";
import About from "./home/about";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePages = ({ user, status }) => {
  const [listMusicEvent, setListMusicEvent] = useState([]);

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(
        "http://localhost:4000/event/get_event/",
        {
          headers: {
            "access-control-allow-orgigin": "*",
          },
        }
      );
      const { success, events } = response.data;

      if (success) {
        setListMusicEvent(events);
      }
    };

    getEvent();
  }, [setListMusicEvent]);

  return (
    <>
      <Banner />
      <Search />
      <Category />
      <About />
      <ListEvent ListMusicEvent={listMusicEvent} />
      {/* <ListOrganizer /> */}
    </>
  );
};
export default HomePages;
