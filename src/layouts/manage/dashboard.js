import { Link, NavLink } from "react-router-dom";
import Sidebar from "./components/sidebar";
import OwnedEvent from "./pages/event";
import { useState } from "react";
import OwnedGroup from "./pages/group";
import RegistedEvent from "./pages/registedEvent";

const routes = [
  {
    id: 1,
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Sự kiện", // name that appear in Sidebar
  },
  {
    id: 2,
    icon: "FormsIcon",
    name: "Sự kiện đăng ký",
  },
  {
    id: 3,
    icon: "CardsIcon",
    name: "Nhóm",
  },
];

const Dashboard = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-2 h-full">
        <div className="py-4 text-gray-500 bg-white shadow-md ">
          <Link to={"/"} className=" px-5">
            <span className=" text-[30px] font-bold text-[#222222] uppercase font-serif ">
              event.
            </span>
          </Link>
          <ul className="mt-6 p-0">
            {routes.map((route) => (
              <li
                className="relative"
                key={route.name}
                onClick={() => {
                  setCurrent(route.id);
                }}
              >
                <NavLink
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 "
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  <span
                    className={
                      current === route.id
                        ? " py-3 bg-gray-300 rounded-lg w-full px-2"
                        : "py-3 rounded-lg w-full px-2"
                    }
                  >
                    {route.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" col-span-10">
        {current === 1 ? (
          <OwnedEvent />
        ) : current === 2 ? (
          <RegistedEvent />
        ) : (
          <OwnedGroup />
        )}
      </div>
    </div>
  );
};
export default Dashboard;
