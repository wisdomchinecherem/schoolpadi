import { useState } from "react";
import { TabButton } from "../../components/reusables/filters";
import { useNavigate, useParams } from "react-router-dom";
import Overview from "../../components/superadmin/usermanagement/Overview";
import Nursery from "../../components/superadmin/usermanagement/Nursery";
import Secondary from "../../components/superadmin/usermanagement/Secondary";
import Primary from "../../components/superadmin/usermanagement/Primary";
import { IoIosArrowRoundBack } from "react-icons/io";

const tabs = ["Overview", "Nursery", "Primary", "Secondary"]

export default function UserManagementDetail() {
    const [activeTab, setActiveTab] = useState("Overview");
    const { id } = useParams();
    const navigate = useNavigate();

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
        <button
          onClick={() => navigate(-1)}
          className=" cursor-pointer flex gap-x-2"
        >
          <IoIosArrowRoundBack className="text-2xl" /> <span>Back</span>
        </button>
        <button className="bg-[#027FFF] px-6 py-2 flex items-center gap-x-2 rounded-2xl">
           {/* <span> </span> */}
           View Features
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

      </div>
    </section>
  )
}
