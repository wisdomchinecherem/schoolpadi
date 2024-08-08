import { useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import { useParams } from "react-router-dom";
import Overview from "../../components/superadmin/usermanagement/Overview";
import Nursery from "../../components/superadmin/usermanagement/Nursery";
import Secondary from "../../components/superadmin/usermanagement/Secondary";
import Primary from "../../components/superadmin/usermanagement/Primary";

const tabs = ["Overview", "Nursery", "Primary", "Secondary"]

export default function UserManagementDetail() {
    const [activeTab, setActiveTab] = useState("Overview");
    const { id } = useParams();
  
    const renderTabContent = () => {
      switch (activeTab) {
          case "Overview":
              return <Overview />;
          case "Nursery":
              return <Nursery />;
          case "Primary":
              return <Primary />;
          case "Secondary":
              return <Secondary />;
          default:
              return <Overview />;
      }
  };
  return (
    <section className="">
      <div className="flex  my-10 items-center text-white p-4 justify-between ">
        <h2>School list</h2>
        <button className="bg-[#027FFF] px-6 py-2 rounded-2xl">
          Add School
        </button>
      </div>

      <div className=" p-3 ">
        <div className="bg-white rounded-2xl  shadow-lg -mt-14">

        <TabButton 
        isBorder
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab} />
        </div>

        {renderTabContent()}

        {/* SchoolListTable component goes here */}
        {/* <SchoolListTable data={filteredData} /> */}
      </div>
    </section>
  )
}
