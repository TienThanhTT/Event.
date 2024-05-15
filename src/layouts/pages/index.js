import { Route, Routes } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../header/navbar";
import HomePages from "./home";
import ProfilePage from "../manage/pages/profile";
import Detail from "./detail/detail";
import CategoryDetail from "../manage/components/category_detail";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
      </Routes>
    </>
  );
};
export default Home;
