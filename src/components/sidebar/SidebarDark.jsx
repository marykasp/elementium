import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const SidebarDark = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-black px-4 text-white max-w-[16rem]  md:relative fixed z-[999] min-h-screen ${
        isOpen ? "w-72" : "w-16"
      } duration-500`}
    >
      {/* menu hamburger icon */}
      <div className="py-3 flex justify-end" onClick={() => setIsOpen(!isOpen)}>
        <MdMenu size={26} className="cursor-pointer" />
      </div>
      {/* menus */}
      <div className="flex flex-col h-full mt-4 relative">
        <ul className="whitespace-pre flex flex-col gap-4 py-4 h-[80%]">
          {menus?.map((menu, index) => (
            <li key={`${menu.name}-${index}`} className="group">
              <NavLink
                to={menu.link}
                className={`flex items-center gap-3 group p-2 text-sm font-medium hover:bg-gray-800 rounded-md ${
                  menu.margin && "mt-5"
                }`}
              >
                <menu.icon className="min-w-max" size={20} />
                <h2
                  style={{
                    transitionDelay: `${index + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !isOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                <h2
                  className={`${
                    isOpen && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-500 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
                >
                  {menu.name}
                </h2>
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Avatar Info */}
        <div
          className={`my-auto flex items-center justify-between py-3 border-t border-gray-300 ${
            isOpen ? "px-2" : "px-0"
          }`}
        >
          <div className="p-2 rounded-full flex items-center justify-center bg-blue-200">
            <FaUser />
          </div>
          <div
            className={`flex flex-col gap-1 duration-500 ${
              !isOpen && "opacity-0 translate-x-28"
            }`}
          >
            <p>John Smith</p>
            <small className="text-xs text-gray-500">johnsmith@gmail.com</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDark;
