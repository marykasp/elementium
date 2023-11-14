import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className={`link duration-75 ${
          pathname.includes(data.name) && "text-blue-600"
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {/* Dynamic react icon */}
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        {subMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </li>
      <motion.ul
        animate={subMenuOpen ? { height: "fit-content" } : { height: 0 }}
        className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0"
      >
        {data.menus.map((item, index) => (
          <li key={item}>
            {/* /build/auth /build/hosting */}
            <NavLink
              to={`/${data.name}/${item}`}
              className="link capitalize !bg-transparent"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
