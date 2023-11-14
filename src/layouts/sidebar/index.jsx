import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  const SidebarAnimation = {
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

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <motion.div
        variants={SidebarAnimation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit z-50 right-2 bottom-5 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
