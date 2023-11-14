import { NavLink } from "react-router-dom";
import { MdDashboard, MdMenu } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const SidebarDark = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-black text-white w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed z-[999]">
      {/* menu hamburger icon */}
      <div
        className="absolute right-5 top-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdMenu size={25} />
      </div>
      {/* menus */}
      <div className="flex flex-col h-full mt-10 relative">
        <ul className="whitespace-pre flex flex-col gap-4 px-2 py-4 mt-4">
          {menus.map((menu, index) => (
            <li className="" key={menu.name}>
              <NavLink
                to={menu.link}
                className="flex items-center gap-3 px-2.5 py-2"
              >
                <menu.icon />
                <h2>{menu.name}</h2>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarDark;
