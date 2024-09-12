import DropdownFilter from "../../reusables/filters/student/DropdownFilter";
import customIcon from "../images/arrow-down.svg";
import customSearchIcon from "../images/search-grey.svg";

import { PencilIcon } from "@heroicons/react/outline";

const ReportCards = () => {
  const yearOptions = [
    { session: "SY 2024" },
    { session: "SY 2023" },
    { session: "SY 2022" },
    { session: "SY 2021" },
  ];

  const grades = [
    {
      subject: "Mathematics",
      hw: "18/20",
      test: "09/10",
      exam: "50/70",
      overall: "A",
    },
    {
      subject: "Mathematics",
      hw: "18/20",
      test: "09/10",
      exam: "50/70",
      overall: "A",
    },
    {
      subject: "Mathematics",
      hw: "-/20",
      test: "-/10",
      exam: "-/70",
      overall: "-",
    },
    {
      subject: "Mathematics",
      hw: "-/20",
      test: "-/10",
      exam: "-/70",
      overall: "-",
    },
  ];

  return (
    <div className="border mt-[18px] mb-[2rem] p-4 border-grayout rounded-md">
      {/* top section */}

      <div className="flex items-center justify-between">
        <div className="flex items-end gap-[10px]">
          <DropdownFilter
            searchPlaceholder="search"
            dropdownIcon={customIcon}
            searchIcon={customSearchIcon}
            options={yearOptions}
          />
          <div className="flex gap-2 py-[18px] px-4 border-grayout border rounded-md cursor-pointer items-center">
            <input type="radio" id="radio" />
            <label
              htmlFor="radio"
              className="text-schoolpadi-grey-primary text-sm"
            >
              Grade Books
            </label>
          </div>
          <div className="flex gap-2 py-[18px] px-4 border-grayout border rounded-md cursor-pointer items-center">
            <input type="radio" id="radio" />
            <label
              htmlFor="radio"
              className="text-schoolpadi-grey-primary text-sm"
            >
              Report Cards
            </label>
          </div>
        </div>
      </div>

      {/* grades section */}

      <div className="">
        <p className="my-[32px] text-2xl text-[#54585C]">Grade Books</p>

        {/* grades */}
        {grades.map((grade, index) => (
          <div
            key={index}
            className={`overflow-x-auto border border-grayout rounded-lg ${
              index !== 0 ? "mt-4" : ""
            }`}
          >
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3">
                    HW (A)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Test
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Exam
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Overall
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      Mathematics
                    </td>
                    <td className="px-6 py-4">18/20</td>
                    <td className="px-6 py-4">09/10</td>
                    <td className="px-6 py-4">50/70</td>
                    <td className="px-6 py-4">A</td>
                    <td className="px-6 py-4 text-right">
                      <PencilIcon className="w-5 h-5 text-blue-500" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default ReportCards;
