import { useState } from "react";
import DropdownFilter from "../../reusables/filters/student/DropdownFilter";
import customIcon from "../images/arrow-down.svg";
import customSearchIcon from "../images/search-grey.svg";
// import FullYearCalendar from "../../reusables/filters/student/Calendar";
import arrow from "../images/arrow.png";
import checkBoxSuccess from "../images/tick-square.png";
import closeBox from "../images/close-square.svg";
import globe from "../images/global.png";
import hashtag from "../images/hashtag.png";

const Attendance = () => {
  const yearOptions = [
    { session: "SY 2024" },
    { session: "SY 2023" },
    { session: "SY 2022" },
    { session: "SY 2021" },
  ];

  const attendanceTypeOptions = [
    { session: "School Attendance" },
    { session: "Class Attendance" },
  ];

  const sectionClassOptions = [
    { session: "Section A" },
    { session: "Section B" },
  ];

  const subjectOptions = [{ session: "Mathematics" }, { session: "Science" }];

  const [selectedYear, setSelectedYear] = useState(yearOptions[0].session);
  const [selectedAttendanceType, setSelectedAttendanceType] = useState(
    attendanceTypeOptions[0].session
  );
  const [selectedSection, setSelectedSection] = useState(
    sectionClassOptions[0].session
  );
  const [selectedSubject, setSelectedSubject] = useState(
    subjectOptions[0].session
  );

  // Dummy data for attendance
  const attendanceData = [
    { date: "2024-07-01", type: "present" },
    { date: "2024-07-03", type: "absent" },
    { date: "2024-07-05", type: "holiday" },
    // ...other dates
  ];

  const handleYearSelect = (option) => setSelectedYear(option.session);
  const handleAttendanceTypeSelect = (option) =>
    setSelectedAttendanceType(option.session);
  const handleSectionSelect = (option) => setSelectedSection(option.session);
  const handleSubjectSelect = (option) => setSelectedSubject(option.session);

  return (
    <div className="border mt-[18px] mb-[2rem] p-4 border-grayout rounded-md">
      <div className="flex gap-4 justify-between lg:flex-nowrap flex-wrap">
        <DropdownFilter
          name="Academic Session"
          options={yearOptions}
          placeholder="select academic session"
          searchPlaceholder="search"
          dropdownIcon={customIcon}
          searchIcon={customSearchIcon}
          onSelect={handleYearSelect}
        />
        <DropdownFilter
          name="Attendance Type"
          options={attendanceTypeOptions}
          placeholder="select attendance type"
          searchPlaceholder="search"
          dropdownIcon={customIcon}
          searchIcon={customSearchIcon}
          onSelect={handleAttendanceTypeSelect}
        />
        <DropdownFilter
          name="Section/Class"
          options={sectionClassOptions}
          placeholder="select section/class"
          searchPlaceholder="search"
          dropdownIcon={customIcon}
          searchIcon={customSearchIcon}
          onSelect={handleSectionSelect}
        />
        <DropdownFilter
          name="Subject"
          options={subjectOptions}
          placeholder="select subject"
          searchPlaceholder="search"
          dropdownIcon={customIcon}
          searchIcon={customSearchIcon}
          onSelect={handleSubjectSelect}
        />
      </div>

      <div className="">
        <div className="flex justify-between my-[32px] items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[10px] py-2 px-3 rounded-lg border-[#DAE1E8] border">
              <img src={arrow} alt="next" />
              <span className="text-[#8E959C] text-sm font-medium">
                Previous
              </span>
            </div>
            <div className="flex items-center gap-[10px] py-2 px-3 rounded-lg border-[#DAE1E8] border">
              <span className="text-[#8E959C] text-sm font-medium">
                Previous
              </span>
              <img src={arrow} alt="next" className="rotate-[180deg]" />
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            {/* present */}
            <div className="flex items-center gap-2 bg-[#E7F6EC] rounded-md py-2 px-3">
              <img src={checkBoxSuccess} alt />
              <span className="text-[#0F973D] font-medium text-sm">
                Present
              </span>
              <span className="px-2 bg-[#0F973D] text-white rounded-xl font-medium text-[12px]">
                230
              </span>
            </div>

            {/* absent */}

            <div className="flex items-center gap-2 bg-[#FBEAE9] rounded-md py-2 px-3">
              <img src={closeBox} alt />
              <span className="text-[#D42620] font-medium text-sm">Absent</span>
              <span className="px-2 bg-[#D42620] text-white rounded-xl font-medium text-[12px]">
                230
              </span>
            </div>

            {/* Holiday */}

            <div className="flex items-center gap-2 bg-[#E6F2FF] rounded-md py-2 px-3">
              <img src={globe} alt />
              <span className="text-[#3599FF] font-medium text-sm">
                Holiday
              </span>
              <span className="px-2 bg-[#3599FF] text-white rounded-xl font-medium text-[12px]">
                230
              </span>
            </div>

            {/* Total days */}

            <div className="flex items-center gap-2 bg-[#FAFBFC] rounded-md py-2 px-3">
              <img src={hashtag} alt />
              <span className="text-[#8E959C] font-medium text-sm">
                Total Days
              </span>
              <span className="px-2 bg-[#8E959C] text-white rounded-xl font-medium text-[12px]">
                230
              </span>
            </div>
          </div>
          {/*  */}
        </div>
        {/* <FullYearCalendar
          year={parseInt(selectedYear.split(" ")[1])}
          attendanceData={attendanceData}
        /> */}
      </div>
    </div>
  );
};

export default Attendance;
