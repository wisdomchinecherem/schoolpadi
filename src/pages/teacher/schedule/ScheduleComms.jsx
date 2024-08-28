import { useState} from "react";
import {  TabButton } from "../../../components/reusables/filters";
import Emails from "../../../components/teacher/schedule/Emails";
import TeacherSmsDashboard from "../../../components/teacher/schedule/TeacherSmsDashboard";
const tabs = ["Notices", "Emails", "SMS", "Whatsapp", "Events"];
// const initialData = [
//   {
//     id: "237855",
//     student: "John Mark",
//     section: "Section A",
//     class: "Class 3",
//     email: "johnmark@mail.com",
//     contact: "08143729284",
//   },
//   {
//     id: "223855",
//     student: "John Mark",
//     section: "Section A",
//     class: "Class 3",
//     email: "johnmark@mail.com",
//     contact: "08143729284",
//   },
//   {
//     id: "343855",
//     student: "John Mark",
//     section: "Section C",
//     class: "Class 1",
//     email: "johnmark@mail.com",
//     contact: "08143729284",
//   },
//   {
//     id: "383055",
//     student: "Senor Mark",
//     section: "Section B",
//     class: "Class 2",
//     email: "johnmark@mail.com",
//     contact: "08143729284",
//   },
// ];

export default function ScheduleComms() {
  const [activeTab, setActiveTab] = useState("Notices");
//   const [filteredData, setFilteredData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);


  const handleRowSelection = (selectedRowIds) => {
    setSelectedRows(selectedRowIds);
  };


  return (
    <section>
      <div className="bg-white rounded-2xl shadow-lg mt-5">
        <TabButton
          isBorder
          tabs={tabs}
          counts={0}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>
   

    
      {activeTab === "Emails" && <Emails
      />}
      {activeTab === "SMS" && <TeacherSmsDashboard
      />}
    </section>
  );
}
