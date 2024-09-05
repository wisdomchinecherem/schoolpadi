import { useState } from "react";
import { TabButton } from "../../../../../components/reusables/filters";
import { Link } from "react-router-dom";
import LessonManager from "../../../../../components/teacher/lms/LessonManager";
import Discussions from "../../../../../components/teacher/lms/Discussions";

const tabs = ["Discussions", "Assessments", "Quiz", "Whatsapp", "Events"];
export default function DetailPage() {
  const [activeTab, setActiveTab] = useState("Discussions");

  return (
    <section className="text-[#6E7479]">
      <div className="flex -mt-6 px-4   justify-between text-white items-center w-full">
        <Link className="text-2xl ">Back</Link>
        <p className=" px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-400">
          {" "}
          Learning Material
        </p>
      </div>
      <div className="bg-white border rounded-2xl p-4 flex items-center">
        <p className="text-xl">Mathematics</p>
        <div className="ml-10 flex items-center gap-8">
            <p>SECTION A - Class 3</p> <span className="bg-[#E6F2FF] text-[#3599FF] p-2 rounded-xl">Core</span>
        </div>
      </div>

      <div className="grid mt-10 grid-cols-3 gap-6">
        <LessonManager />
        <div className="col-span-2 rounded-2xl  mt-5">
          <TabButton
            isBorder
            tabs={tabs}
            activeTab={activeTab}
            onTabClick={setActiveTab}
          />
          {activeTab === "Discussions" && <Discussions />}
          {activeTab === "Assessments" && <>Assessments</>}
          {activeTab === "Quiz" && <>Quiz</>}
        </div>
      </div>
    </section>
  );
}
