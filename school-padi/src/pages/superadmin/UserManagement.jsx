import { useMemo, useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import SchoolListTable from "../../components/tables/superadmin/SchoolListTable";

const tabs = ["Active", "Expired", "On trial"]
const data = [
  {
      id:1,
      school:"school 1",
      school_number: "123456",
      signup_date: "2022-06-19",
      expiration_date: "2022-06-30",
      categories: "Nursery, Primary, Secondary",
      type: "active"
  },
  {
      id:2,
      school:"school 2",
      school_number: "789012",
      signup_date: "2022-06-20",
      expiration_date: "2022-07-01",
      categories: "Nursery, Primary, Secondary",
      type: "expired"
  },
  {
      id:3,
      school:"school 3",
      school_number: "345678",
      signup_date: "2022-06-21",
      expiration_date: "2022-07-02",
      categories: "Nursery, Primary, Secondary",
      type: "on trial"
  }
]
export default function UserManagement() {

  const [activeTab, setActiveTab] = useState("Active");

  const filteredData = useMemo(() => {
    if (activeTab === "Active") return data;
    return data.filter((item) => item.type.toLowerCase() === activeTab.toLowerCase());
  }, [activeTab]);
  return (
    <section className="">
      <div className="flex  my-10 items-center text-white p-4 justify-between ">
        <h2>School list</h2>
        <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
          Add School
        </button>
      </div>

      <div className=" p-3 ">
        <div className="bg-white rounded-2xl py-3 shadow-lg -mt-14">

        <TabButton 
        isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab} />
        </div>
        {/* SchoolListTable component goes here */}
        <SchoolListTable data={filteredData} />
      </div>
    </section>
  );
}