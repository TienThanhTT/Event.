import { Route, Routes } from "react-router-dom";
import HomePages from "../layouts/pages";
import Detail from "../layouts/pages/detail/detail";
import CreatePage from "../layouts/manage/create";
import Dashboard from "../layouts/manage/dashboard";
import Register from "../components/auth/register";
import Login from "../components/auth/login";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../layouts/footer/footer";
import Navbar from "../layouts/header/navbar";
import CreateGroup from "../components/createGroup";
function App() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      const { status, user } = response.data;
      if (status) {
        setStatus(status);
        setUser(user);
      }
    };
    verifyCookie();
  }, []);
  return (
    <div className="App">
      <Navbar user={user} status={status} />
      <Routes path="/">
        <Route path="/" element={<HomePages user={user} status={status} />} />
        <Route path="/event">
          <Route
            path="/event/detail/:eventId"
            element={<Detail user={user} />}
          />
        </Route>

        <Route path="/manage">
          <Route path="/manage/" element={<Dashboard />} />
          <Route
            path="/manage/create"
            element={<CreatePage user={user} status={status} />}
          />
        </Route>
        <Route path="/auth">
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>
        <Route path="/group">
          <Route path="/group/create" element={<CreateGroup user={user} />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>{" "} */}
      <Footer />
    </div>
  );
}

export default App;
