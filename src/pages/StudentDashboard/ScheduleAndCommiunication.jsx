import { useState } from "react";
import Notice from "../../components/StudentDashboard/scheduleandcommiunication/Notice";
import Events from "../../components/StudentDashboard/scheduleandcommiunication/Events";

const ScheduleAndCommiunication = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const TabLinks = [{ TabName: "Notices" }, { TabName: "Events" }];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Notices":
        return <Notice />;
      case "Events":
        return <Events />;
      default:
        return <Notice />;
    }
  };

  return (
    <div>
      <div className="mt-[4.5rem]">
        <div
          className="flex items-center justify-center rounded-small mt-2 overflow-hidden bg-white px-8 w-full"
          style={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="flex justify-between w-full h-full py-[15px] px-[72px] items-center">
            {TabLinks.map((TabLink, index) => (
              <div
                key={index}
                className={`cursor-pointer font-medium text-sm ${
                  activeTab === TabLink.TabName
                    ? "text-[#3599FF] active-tab-indicator"
                    : "text-schoolpadi-grey-secondary"
                }`}
                onClick={() => handleTabClick(TabLink.TabName)}
              >
                {TabLink.TabName}
              </div>
            ))}
          </div>
        </div>

        {/* render active component */}
        <div className="w-full">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default ScheduleAndCommiunication;
