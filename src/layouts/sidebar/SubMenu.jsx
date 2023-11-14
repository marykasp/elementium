import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  return (
    <>
      <li className={`link ${pathname.includes(data.name) && "text-blue-600"}`}>
        {/* Dynamic react icon */}
        <data.icon size={23} />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className=" " />
      </li>
      <ul>
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
      </ul>
    </>
  );
};

export default SubMenu;
