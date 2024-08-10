import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { FaExclamation, FaTrashAlt, FaLock, FaSave } from 'react-icons/fa';
import Pagination from "../reusables/filters/Pagination";
import { useNavigate } from "react-router-dom";
import { MdFilterList } from "react-icons/md";

const InfomationSystem = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [openIndex, setOpenIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { name: 'John Doe', section: 'A', class: '10', id: '12345', email: 'john@example.com', contacts: '123-456-7890' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    { name: 'Jane Smith', section: 'B', class: '9', id: '67890', email: 'jane@example.com', contacts: '987-654-3210' },
    //random data here...
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
    { heading: 'Academic Session', label: 'Select Academic Session', options: ['2023/2024', '2022/2023', '2021/2022'] },
    { heading: 'Section', label: 'Select Section', options: ['Session 1', 'Session 2', 'Session 3'] },
    { heading: 'Class', label: 'Select Class', options: ['Class 1', 'Class 2', 'Class 3'] },
    { heading: 'Subjects', label: 'Select Subjects', options: ['Math', 'Science', 'English'] },
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
  <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4"> {/* Reduced vertical padding */}
    <div className="grid grid-cols-4 gap-2"> {/* Reduced grid gap */}
      <a href="/students" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Students</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
          12
        </div>
      </a>
      <a href="/teachers" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Teachers</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
          8
        </div>
      </a>
      <a href="/admin" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Admin</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
          3
        </div>
      </a>
      <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">Parents</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
          25
        </div>
      </a>
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
    <div className="absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <div className="px-4 py-2 text-gray-700 font-bold">Subjects</div>
        <div className="px-4 py-2 text-gray-700">Students Enrollments</div>
        <div className="px-4 py-2 text-gray-700">Elective or Core Subjects Enrollments</div>
        <div className="px-4 py-2 text-gray-700">Update Students Enrollment Status</div>
        <div className="px-4 py-2 text-gray-700">Update Subjects Enrollment Status</div>
        <div className="px-4 py-2 text-gray-700">Assign Degree to Students</div>

        <div className="px-4 py-2 text-gray-700 font-bold">Communication</div>
        <div className="px-4 py-2 text-gray-700">This is a subheading for the title</div>
        <div className="px-4 py-2 text-gray-700">Send Email</div>
        <div className="px-4 py-2 text-gray-700">Send SMS</div>
        <div className="px-4 py-2 text-gray-700">Invite to Login (Email)</div>
        <div className="px-4 py-2 text-gray-700">Invite to Login (SMS)</div>
        <div className="px-4 py-2 text-gray-700">Invite to Login (WhatsApp)</div>

        <div className="px-4 py-2 text-gray-700 font-bold">Academics</div>
        <div className="px-4 py-2 text-gray-700">This is a subheading for the title</div>
        <div className="px-4 py-2 text-gray-700">Print ID Card</div>
        <div className="px-4 py-2 text-gray-700">Print Report Cards</div>
        <div className="px-4 py-2 text-gray-700">Enable Report Cards</div>
        <div className="px-4 py-2 text-gray-700">Disable Report Cards</div>

        <div className="px-4 py-2 text-gray-700 font-bold">Other Actions</div>
        <div className="px-4 py-2 text-gray-700">This is a subheading for the title</div>
        <div className="px-4 py-2 text-gray-700">Block</div>
        <div className="px-4 py-2 text-gray-700">Unblock</div>
        <div className="px-4 py-2 text-gray-700">Move to Alumni</div>
        <div className="px-4 py-2 text-gray-700">Delete</div>
      </div>
    </div>
  )}
</div>


</div>




    {/* Section Form */}
    <div className="w-full px-4 py-8">
      <div className="w-full max-w-screen-xl bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden mx-auto">
        <div className="bg-gray-300 p-4">
          <div className="flex justify-between text-[#8E959C] text-sm md:text-base">
            <span className="px-2">Name</span>
            <span className="px-2">Section</span>
            <span className="px-2">Class</span>
            <span className="px-2">ID</span>
            <span className="px-2">Email</span>
            <span className="px-2">Contacts</span>
            <span className="px-2">Icons</span>
          </div>
        </div>
        <div className="p-4 space-y-2 overflow-x-auto">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-2   text-[#8E959C] text-xs md:text-base md:border">
              <input type="checkbox" className="mr-4" />
              <span className="px-2 whitespace-nowrap ">{item.name}</span>
              <span className="px-2">{item.section}</span>
              <span className="px-2">{item.class}</span>
              <span className="px-2">{item.id}</span>
              <span className="px-2">{item.email}</span>
              <span className="px-2">{item.contacts}</span>
              <div className="flex space-x-2">
                <FaExclamation className="text-[#8E959C] cursor-pointer" />
                <FaTrashAlt className="text-[#8E959C] cursor-pointer" />
                <FaLock className="text-[#8E959C] cursor-pointer" />
                <FaSave className="text-[#8E959C] cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="rounded border text-[#8E959C]">
      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />    
    </div>

    </>
    
  );
};

export default InfomationSystem;
