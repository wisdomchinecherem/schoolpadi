import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./responsive.css";
import "./custom.css";

const StudentLayout = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Navbar />
      <div className="flex flex-col flex-grow md:px-[52px] lg:px-[52px] relative min-h-screen -mt-[140px] md:-mt-[140px] 2xl:-mt-[120px]">
        <Outlet />
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
};

export default StudentLayout;
