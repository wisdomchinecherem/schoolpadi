import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function SuperAdminLayout() {
  return (
    <div className="flex flex-col h-screen bg-[#001D3B] w-full overflow-hidden">
      <TopNav />
      <div className="flex flex-col flex-grow  dark:bg-[#1A1A1A] ">
        <Outlet />
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}

