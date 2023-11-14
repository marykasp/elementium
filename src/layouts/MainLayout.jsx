import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import SidebarDark from "../components/sidebar/SidebarDark";

// data
import { menus } from "../constants/data";

const MainLayout = () => {
  return (
    <div className="flex gap-5">
      {/* <Sidebar /> */}
      <SidebarDark menus={menus} />
      <main className="max-w-5xl flex-1 mx-4 py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
