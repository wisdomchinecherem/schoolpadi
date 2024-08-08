import { FaCalendarAlt, FaPlusCircle } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import Navbar from "./Navbar";
import SearchComponent from "../../../components/reusables/filters/SearchComponent";

export default function TopNav() {
  return (
    <div className="w-full bg-[#014F9E] text-white h-[40vh] py-8 px-[80px] ">
      <div className="flex items-center justify-between">
        <img src="/schoolpadi.svg" alt="school padi image" />
        <SearchComponent />
        <div className="flex items-center gap-x-5 text-xl text-[#01356B]">
          <div className="flex items-center p-2 bg-white rounded-full">
            <FaPlusCircle />
          </div>
          <div className="flex items-center p-2 bg-white rounded-full">
            <IoChatbubbles />
          </div>
          <div className="flex items-center p-2 bg-white rounded-full">
            <GrAnnounce />
          </div>
          <div className="flex items-center p-2 bg-white rounded-full">
            <MdPerson />
          </div>
        </div>
      </div>
      <div className="flex items-center my-10 justify-between">
        <h2 className="text-3xl">Welcome, Name</h2>

        <div className="flex items-center gap-x-2">
          <FaCalendarAlt />
          <p className="text-xl">12th July 2024</p>
          {/* <BsFillCircleFill /> */}
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <p className="text-xl">09:00 AM</p>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
