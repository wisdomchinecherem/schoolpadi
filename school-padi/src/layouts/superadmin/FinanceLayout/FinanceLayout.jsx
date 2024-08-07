import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function FinanceLayout() {
  return (
    <div className="flex flex-col h-screen  w-full overflow-hidden">
      <TopNav />
      <div className="flex flex-col flex-grow px-[80px] -mt-[150px] dark:bg-[#1A1A1A] ">
        <Outlet />
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}

