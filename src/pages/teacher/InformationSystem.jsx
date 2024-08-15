import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { TabButton } from "../../components/reusables/filters";
import StudentsListTable from "../../components/tables/teacher/StudentsListTable";


const tabs = ["Students", "Classes", "Parents"];
const data = [
    {
      id: "237855",
      student: "John Mark",
      section: "Section A",
      class: "Class 3",
      email: "johnmark@mail.com",
      contact: "08143729284",
    },
    {
        id: "223855",
        student: "John Mark",
        section: "Section A",
        class: "Class 3",
        email: "johnmark@mail.com",
        contact: "08143729284",
      },
      {
        id: "343855",
        student: "John Mark",
        section: "Section C",
        class: "Class 1",
        email: "johnmark@mail.com",
        contact: "08143729284",
      },
      {
        id: "383055",
        student: "Senor Mark",
        section: "Section B",
        class: "Class 2",
        email: "johnmark@mail.com",
        contact: "08143729284",
      },

  ];
  
export default function InformationSystem() {
    const [activeTab, setActiveTab] = useState("Students");


  

  return (
    <section>

      <p className="my-2 text-3xl text-white">Students List</p>

<div className="bg-white rounded-2xl  shadow-lg mt-5">
          <TabButton
            isBorder
            tabs={tabs}
            counts={200}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
        </div>

        <StudentsListTable data={data} />
    </section>
  )
}
