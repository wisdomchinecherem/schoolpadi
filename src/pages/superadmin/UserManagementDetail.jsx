import { useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import { useParams } from "react-router-dom";

const tabs = ["Active", "Expired", "On trial"]

export default function UserManagementDetail() {
    const [activeTab, setActiveTab] = useState("Active");
    const { id } = useParams();

  return (
    <section className="">
    <div className="flex px-[80px] my-10 items-center text-white p-4 justify-between ">
      <h2>School list</h2>
      <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
        Add School
      </button>
    </div>

    <div className="bg-white h-[70vh] p-3 px-[80px]">
      <div className="bg-white rounded-2xl py-3 shadow-lg -mt-14">

      <TabButton
      isBorder
        tabs={tabs}
        activeTab={activeTab}
        onTabClick={setActiveTab} />
      </div>
      {/* SchoolListTable component goes here */}
      {/* <SchoolListTable data={filteredData} /> */}
    </div>
  </section>
  )
}
