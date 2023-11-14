import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// other packages
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// components
import SubMenu from "./SubMenu";

// react icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const { pathname } = useLocation();

  // sidebar open state if not in mobile (initial state)
  const [isOpen, setIsOpen] = useState(isTab ? false : true);
  console.log(`mobile screen: ${isTab}`);

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // desktop
      setIsOpen(true);
    }
  }, [isTab]);

  // pathname change -> close sidebar (only on mobile view)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);

  const SidebarAnimation = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // System view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      // main menu name (dashboard, settings)
      name: "build",
      icon: RiBuilding3Line,
      // submenus
      menus: ["auth", "app settings", "storage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    <div>
      {/* overlay only shown on mobile when sidebar is open */}
      <div
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-zinc-500/50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <motion.div
        variants={SidebarAnimation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen  md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt=""
            width={45}
          />
          <span className="text-xl whitespace-pre">Elementium</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          {/* first */}
          <ul className="whitespace-pre  scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-50 px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden h-[70%] md:max-h-[68%]">
            <li>
              <NavLink to="/" className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                {isOpen && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/authentication" className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                {isOpen && <span>Authentication</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/storage" className={"link"}>
                <HiOutlineDatabase size={23} className="min-w-max" />
                {isOpen && <span>Storage</span>}
              </NavLink>
            </li>

            {/* only show submenus when sidebar is open */}
            {/* mobile view shows submenus */}
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
                <div className="flex flex-col gap-1">
                  {subMenusList?.map((menu, index) => (
                    <SubMenu data={menu} key={menu.name} />
                  ))}
                </div>
              </div>
            )}

            <li>
              <NavLink to="/settings" className={"link"}>
                <SlSettings size={23} className="min-w-max" />
                <span
                  className={`duration-500 whitespace-pre ${
                    !isOpen && "opacity-0 overflow-hidden translate-x-28"
                  }`}
                >
                  Settings
                </span>
              </NavLink>
            </li>
          </ul>
          {/* second */}
          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-full">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>

        {/* toggle menu button */}
        <motion.div
          animate={
            isOpen
              ? { x: 0, y: 0, rotate: 0 }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
