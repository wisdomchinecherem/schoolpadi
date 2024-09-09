import Profile from "../../components/StudentDashboard/academicManagement/Profile";
import Enrollment from "../../components/StudentDashboard/academicManagement/Enrollment";
import ClassSchedule from "../../components/StudentDashboard/academicManagement/ClassSchedule";
import Attendance from "../../components/StudentDashboard/academicManagement/Attendance";
import ReportCards from "../../components/StudentDashboard/academicManagement/ReportCards";
import Invoices from "../../components/StudentDashboard/academicManagement/Invoices";
import IDCards from "../../components/StudentDashboard/academicManagement/IDCards";
import BackArrow from "../../components/StudentDashboard/images/arrow-left.svg";
import More from "../../components/StudentDashboard/images/more.png";
import { useState } from "react";

const AcademicManagement = () => {
  const [Dropdown, setDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Profile");

  const TabLinks = [
    { TabName: "Profile" },
    { TabName: "Enrollment" },
    { TabName: "Class Schedule" },
    { TabName: "Attendance" },
    { TabName: "Report Cards" },
    { TabName: "Invoices" },
    { TabName: "ID Cards" },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Enrollment":
        return <Enrollment />;
      case "Class Schedule":
        return <ClassSchedule />;
      case "Attendance":
        return <Attendance />;
      case "Report Cards":
        return <ReportCards />;
      case "Invoices":
        return <Invoices />;
      case "ID Cards":
        return <IDCards />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-[1336px] mx-auto px-4">
        <div className="flex flex-col items-center w-full">
          <div className="mt-[4.5rem] items-start flex w-full justify-between">
            <div className="flex items-center">
              <img src={BackArrow} alt="back" />
              <span className="ml-2 text-white font-medium text-sm">Back</span>
            </div>
            {/*  */}
            <div className="flex flex-col relative w-full items-end">
              <div
                className="bg-white cursor-pointer p-1 w-[28px] rounded-lg"
                onClick={() => {
                  setDropdown((prev) => !prev);
                }}
              >
                <div className="flex items-center px-[2px] py-[8px] gap-2">
                  <img src={More} alt="more" />
                </div>
              </div>

              {/* Dropdown */}

              <div
                className={`bg-white p-1 rounded-lg top-[125%] absolute ${
                  Dropdown ? "block" : "hidden"
                }`}
                style={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center w-full px-[16px] py-[8px]">
                  {/* <img src={""} alt="" /> */}
                  <div className="w-[20px] bg-gray-600 h-[20px] rounded-md"></div>
                  <span className="ml-3 text-sm text-schoolpadi-grey-primary">
                    Edit Profile
                  </span>
                </div>
                <div className="flex items-center mt-1 px-[16px] py-[8px] w-full">
                  {/* <img src={""} alt="" /> */}
                  <div className="w-[20px] bg-gray-600 h-[20px] rounded-md"></div>
                  <span className="ml-3 text-sm text-schoolpadi-grey-primary">
                    Manage Attachments
                  </span>
                </div>
              </div>
            </div>
          </div>
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
        </div>

        {/* profile */}
        <div className="w-full">{renderActiveComponent()}</div>

        {/* Enrollment */}

        {/* <div className="border border-grayout flex flex-col p-4">
          <div></div>
        </div> */}
      </div>
    </div>
  );
};

export default AcademicManagement;
