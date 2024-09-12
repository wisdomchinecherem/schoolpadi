import { useState } from "react";
import More from "../../components/StudentDashboard/images/more.png";
import ParentProfile from "../../components/Parent/administration/Profile";
import ParentInvoices from "../../components/Parent/administration/Invoices";

const AdministrationsPage = () => {
  const tabOptions = [{ name: "Profile" }, { name: "Invoices" }];

  // Manage active tab state
  const [activeTab, setActiveTab] = useState(tabOptions[0].name);

  // Function to render the component based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ParentProfile />;
      case "Invoices":
        return <ParentInvoices />;
      default:
        return <ParentProfile />;
    }
  };

  return (
    <div className="container mx-auto p-4 mt-[39px]">
      <div className="flex items-center justify-between mb-[18px]">
        <span className="text-[24px] font-medium text-white">
          Manage Profile
        </span>
        <div className="bg-white py-[9px] px-2 rounded-md cursor-pointer">
          <img src={More} />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-between shadow-md rounded-md bg-white rounded-t-md">
        {tabOptions.map((tab, index) => (
          <button
            key={index}
            className={`px-6 py-3 text-sm font-medium w-1/2 focus:outline-none transition-colors duration-300 ${
              activeTab === tab.name
                ? "text-[#3599FF] border-b border-[#3599FF]"
                : "text-[#8E959C]"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-white mt-[18px]">{renderTabContent()}</div>
    </div>
  );
};

export default AdministrationsPage;
