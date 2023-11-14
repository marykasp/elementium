import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 py-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
