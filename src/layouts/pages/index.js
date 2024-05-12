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
        "https://event-backend-b6gm.onrender.com/event/get_event"
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
