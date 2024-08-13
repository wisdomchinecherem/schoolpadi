import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaExclamation, FaTrashAlt, FaLock, FaSave } from 'react-icons/fa';
import Pagination from "../reusables/filters/Pagination";
import { NavLink, useNavigate } from "react-router-dom";
import { MdFilterList } from "react-icons/md";

const Teachers = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    // Sample data here...
  ];

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(data.slice(start, end));
  }, [currentPage, data]);

  const dropdownData = [
    // Dropdown data here...
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">Student List</span>
        <button className="bg-white text-[#014F9E] py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0 mb-2">
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Student
        </button>
      </div>

      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4">
          <div className="grid grid-cols-4 gap-2">
            <NavLink to="/students" className={({ isActive }) => `flex flex-col sm:flex-row items-center justify-center ${isActive ? 'text-blue-500' : 'text-[#8E959C]'} `}>
              <span className="text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Students</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                12
              </div>
            </NavLink>
            <NavLink to="/Teachers" className={({ isActive }) => `flex flex-col sm:flex-row items-center justify-center ${isActive ? 'text-blue-500' : 'text-[#8E959C]'} `}>
              <span className="text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Teachers</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                8
              </div>
            </NavLink>
            <NavLink to="/admin" className={({ isActive }) => `flex flex-col sm:flex-row items-center justify-center ${isActive ? 'text-blue-500' : 'text-[#8E959C]'} `}>
              <span className="text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Admin</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                3
              </div>
            </NavLink>
            <NavLink to="/parents" className={({ isActive }) => `flex flex-col sm:flex-row items-center justify-center ${isActive ? 'text-blue-500' : 'text-[#8E959C]'} `}>
              <span className="text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Parents</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Four Small Rectangles */}
      <div className="flex flex-wrap justify-center gap-8 mt-6 w-full px-4 md:px-20">
        {dropdownData.map((data, index) => (
          <div key={index} className="w-full md:w-[300px] px-2">
            <h2 className="text-[#101828] mb-2">{data.heading}</h2>
            <div
              className="relative bg-white border w-full h-20 rounded-md flex items-center justify-between px-4 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <span className="text-[#D3DBE3]">{data.label}</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3]" />
              {openIndex === index && (
                <ul className="absolute top-full left-0 right-0 bg-gray-100 border shadow-lg z-10">
                  {data.options.map((option, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-[#8E959C]">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-2 flex justify-between items-center px-8 py-4 sm:p-4 sm:px-12 lg:px-24">
        {/* Cards Container */}
        <div className="hidden sm:flex space-x-4">
          <span className="text-[#D3DBE3] border py-1 px-24 rounded flex items-center text-sm leading-none sm:py-2 sm:px-32 sm:text-base mt-[-4px]">
            PlaceHolder
          </span>

          <div className="flex border rounded-xl text-[#8E959C] text-md font-semibold p-2 gap-x-4 items-center">
            <span className="text-[#D3DBE3]">Filter</span>
            <MdFilterList />
          </div>
        </div>

        {/* Buttons for Small Screens */}
        <div className="flex sm:hidden space-x-2">
          <button className="bg-blue-500 text-white text-xs font-bold py-2 px-2 rounded w-18 flex items-center justify-center">
            placeholder
          </button>
          <button className="bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded w-16 flex items-center justify-center">
            Filter
          </button>
        </div>
        {/* Selected Button on the Right */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8E959C] border py-1 px-2 rounded flex items-center text-xs leading-none sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-sm"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="mr-1 border rounded-full p-1 text-xs sm:text-xs md:text-base"
            />
            <span className="hidden sm:inline text-xs sm:text-xs md:text-sm">
              Selected
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[#D3DBE3] ml-2 text-xs sm:text-xs md:text-base"
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[600px] overflow-hidden overflow-y-auto">
              <div className="py-1">
                <a
                  href="#"
                  className="text-gray-900 block px-4 py-2 text-sm"
                >
                  Action
                </a>
                <a
                  href="#"
                  className="text-gray-900 block px-4 py-2 text-sm"
                >
                  Another Action
                </a>
                <a
                  href="#"
                  className="text-gray-900 block px-4 py-2 text-sm"
                >
                  Something else here
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Position</th>
              <th className="text-left px-4 py-2">Department</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.position}</td>
                <td className="px-4 py-2">{item.department}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <FaExclamation className="text-yellow-500 cursor-pointer" />
                  <FaTrashAlt className="text-red-500 cursor-pointer" />
                  <FaLock className="text-gray-500 cursor-pointer" />
                  <FaSave className="text-green-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Teachers;
