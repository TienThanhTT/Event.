import { Link, NavLink } from "react-router-dom";

const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Sự kiện", // name that appear in Sidebar
  },
  {
    path: "/app/forms",
    icon: "FormsIcon",
    name: "Sự kiện đăng ký",
  },
  {
    path: "/app/cards",
    icon: "CardsIcon",
    name: "Nhóm",
  },
];

function Sidebar() {
  return (
    <div className="py-4 text-gray-500 bg-white shadow-md ">
      <Link to={"/"} className=" px-5">
        <span className=" text-[30px] font-bold text-[#222222] uppercase font-serif ">
          event.
        </span>
      </Link>
      <ul className="mt-6">
        {routes.map((route) => (
          <li className="relative py-3" key={route.name}>
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              activeClassName="text-gray-800 dark:text-gray-100"
            >
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
