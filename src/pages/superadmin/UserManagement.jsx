import { useMemo, useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import SchoolListTable from "../../components/tables/superadmin/SchoolListTable";
import { FiPlus } from "react-icons/fi";
import CustomSearch from "../../components/reusables/filters/CustomSearch";
import { MdFilterList } from "react-icons/md";

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
  },
  {
      id:4,
      school:"school 3",
      school_number: "345678",
      signup_date: "2022-06-21",
      expiration_date: "2022-07-02",
      categories: "Nursery, Primary, Secondary",
      type: "on trial"
  },
  {
      id:5,
      school:"school 3",
      school_number: "345678",
      signup_date: "2022-06-21",
      expiration_date: "2022-07-02",
      categories: "Nursery, Primary, Secondary",
      type: "on trial"
  },
  {
      id:6,
      school:"school 3",
      school_number: "345678",
      signup_date: "2022-06-21",
      expiration_date: "2022-07-02",
      categories: "Nursery, Primary, Secondary",
      type: "on trial"
  },
  {
      id:7,
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
  // const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [searchQuery, setSearchQuery] = useState(""); // State for search query


  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.type.toLowerCase() === activeTab.toLowerCase() &&
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [activeTab, searchQuery]);

  const counts = useMemo(() => {
    const countObj = { active: 0, expired: 0, "on trial": 0 };
    data.forEach((item) => {
      countObj[item.type.toLowerCase()] += 1;
    });
    return countObj;
  }, []);
  
  return (
    <section className="">
      <div className="flex  my-10 items-center text-white p-4 justify-between ">
        <h2 className="text-2xl">School list</h2>
        <button className="bg-[#027FFF] px-6 py-2 flex items-center gap-x-2 rounded-2xl">
        <FiPlus /> <span>Add School </span>  
        </button>
      </div>

      <div className=" p-3 ">
        <div className="bg-white rounded-2xl  shadow-lg -mt-14">

        <TabButton 
        isBorder
          tabs={tabs}
          counts = {counts}
          activeTab={activeTab}
          onTabClick={setActiveTab} />
        </div>
        <div className="flex items-center py-4 gap-6">
            <CustomSearch
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center">
              <span className=" text-[#8E959C]">Filter</span>
              <MdFilterList />
            </div>
          </div>
        <SchoolListTable data={filteredData} />
      </div>
    </section>
  );
}
