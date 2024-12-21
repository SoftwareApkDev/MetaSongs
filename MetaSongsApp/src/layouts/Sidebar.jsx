import React, { useState } from "react";
import { FaHome, FaPlus, FaUser, FaCompactDisc, FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/MetaSong-Logo.png";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "New", icon: <FaPlus />, path: "/new" },
    { label: "Artists", icon: <FaUser />, path: "/artists" },
    { label: "Singles", icon: <FaMusic />, path: "/singles" },
    { label: "Albums", icon: <FaCompactDisc />, path: "/albums" },
  ];

  const handleMenuClick = (label) => {
    setActiveMenu(label);
  };

  return (
    <section>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-50"
          onClick={closeSidebar}
        ></div>
      )}
      <div
        className={`z-50 fixed top-0 left-0 h-full md:rounded-3xl bg-gray-800 text-white w-56 md:w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}
      >
        <div className="w-56 md:w-64 h-screen md:rounded-t-3xl bg-gray-900 text-white flex flex-col font-poppins">
          <div className="text-2xl font-bold p-4 flex gap-3">
            <div className="h-10 w-10">
              <img
                src={Logo}
                alt="Logo"
                className="h-full w-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            <div className="my-auto">Meta<span className="text-orange-400">Songs</span></div>
          </div>
          <div className="relative mx-auto w-5/6 mt-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border border-gray-500 bg-gray-700 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
              aria-label="Search"
            />
          </div>
          <nav className="flex-1">
            <ul className="space-y-2 p-4">
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index}>
                  <li
                    onClick={() => handleMenuClick(item.label)}
                    className={`p-2 rounded flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                      activeMenu === item.label
                        ? "text-orange-300"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    <span
                      className={`text-lg ${
                        activeMenu === item.label ? "text-orange-400" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
