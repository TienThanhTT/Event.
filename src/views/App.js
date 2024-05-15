import { Route, Routes } from "react-router-dom";
import CreatePage from "../layouts/manage/create";
import Dashboard from "../layouts/manage/dashboard";
import Register from "../components/auth/register";
import Login from "../components/auth/login";
import CreateGroup from "../layouts/manage/pages/createGroup";
import CategoryDetail from "../layouts/manage/components/category_detail";
import { ToastContainer } from "react-toastify";

import Detail from "../layouts/pages/detail/detail";
import Navbar from "../layouts/header/navbar";
import Footer from "../layouts/footer/footer";
import HomePages from "../layouts/pages/home";
import ProfilePage from "../layouts/manage/pages/profile";
import ManageDetail from "../layouts/manage/components/manageDetail";
import EventManage from "../layouts/manage/components/eventManage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/manage/create" element={<CreatePage />} />
        <Route
          path="/manage/manage_detail/:eventId"
          element={<ManageDetail />}
        />
        <Route path="/manage/event/:eventId" element={<EventManage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />

        <Route path="/auth">
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>

        <Route path="/event/detail/:eventId" element={<Detail />} />

        <Route path="/group">
          <Route path="/group/create" element={<CreateGroup />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
