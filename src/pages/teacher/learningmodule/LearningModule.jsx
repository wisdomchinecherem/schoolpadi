import { FaAngleRight, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MiscIcon from "../../../components/reusables/icons/MiscIcon";

const Card = ({ title, subtitle, onClick }) => {
  return (
    <div
      className="flex flex-col h-[220px] justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        <div className="bg-blue-100 p-2 rounded-xl">
          <MiscIcon color="#3599FF" />
        </div>
        <h2 className="text-lg font-[500]">{title}</h2>
      </div>
      <div className=" text-[#8E959C] flex items-center gap-3 mt-4">
        <FaAngleRight /> <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

Card.propTypes ={
    
}
export default function LearningModule() {
    
    const navigate = useNavigate()
    const cards = [
      {
        title: "Attendance",
        subtitle: "Manage Attendance",
        onClick: () => navigate("/t/learning-module/attendance"),
      },
      {
        title: "Assessment",
        subtitle: "Manage Assessment",
        onClick: () => alert("Navigating to Assessment"),
      },
      {
        title: "Learning Plan",
        subtitle: "Learning Management System",
        onClick: () => alert("Navigating to Learning Plan"),
      },
    ];
  return (
    <section>
      <div className="flex -mt-6 justify-between text-white items-center w-full">
        <Link
          to={"/t/schedule-comms/create-message"}
          className="bg-[#027FFF] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-400"
        >
          {" "}
          <FaPlus /> <span> Compose</span>{" "}
        </Link>
      </div>
      <div className="bg-white grid grid-cols-3 gap-3 p-4 rounded-2xl shadow-lg mt-5">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            onClick={card.onClick}
          />
        ))}
      </div>
    </section>
  );
}
