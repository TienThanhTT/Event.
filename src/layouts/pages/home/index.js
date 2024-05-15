import Banner from "./pages/banner";
import ListEvent from "./pages/listEvent";

import Search from "./pages/search";
import Category from "./pages/category";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePages = () => {
  const [listMusicEvent, setListMusicEvent] = useState([]);

  useEffect(() => {
    const getEvent = async () => {
      const response = await axios.get(
        "https://event-backend-b6gm.onrender.com/event/get_event"
        // "http://localhost:4000/event/show_event"
      );
      const { success, events } = response.data;

      if (success) {
        setListMusicEvent(events);
      }
    };
    getEvent();
  }, []);

  return (
    <>
      <Banner />
      <Search />
      <Category />
      <ListEvent ListMusicEvent={listMusicEvent} />
      {/* <ListOrganizer /> */}
    </>
  );
};
export default HomePages;
