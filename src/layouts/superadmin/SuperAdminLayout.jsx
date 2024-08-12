import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function SuperAdminLayout() {
  return (
    <div className="flex flex-col   w-full overflow-hidden">
      <TopNav />
      <div className="flex flex-col flex-grow xl:px-[80px] p-4 min-h-screen -mt-[140px] md:-mt-[140px] 2xl:-mt-[140px] dark:bg-[#1A1A1A] ">
        <Outlet />
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}

