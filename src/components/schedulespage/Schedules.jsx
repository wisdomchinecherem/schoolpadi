import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import { MdFilterList } from "react-icons/md";
import Pagination from "../reusables/filters/Pagination";
import { useNavigate } from "react-router-dom";

const Schedules = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Added missing bracket
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Added isOpen state

  // Mock data for teachersData
  const [teachersData] = useState([

  ]);

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(teachersData.slice(start, end));
  }, [currentPage, teachersData]);



  return (
    <>
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">Notices</span>
        <button className="bg-white text-[#014F9E] py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0 mb-2">
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Student
        </button>
      </div>

      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4"> {/* Reduced vertical padding */}
          <div className="grid grid-cols-6 gap-2"> {/* Reduced grid gap */}
            <a href="/InfomationSystem" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Notices</span>
              <div className="bg-blue-600 text-[#FFFFFF] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                12
              </div>
            </a>
            <a href="/Teachers" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Emails</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                8
              </div>
            </a>
            <a href="/AdminPage" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C]  text-xs sm:text-sm mb-1 mr-2 sm:mb-0">SMS</span>
              <div className="bg-gray-300 text-[#8E959C]  rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                3
              </div>
            </a>
            <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">WhatsApp</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
            <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">WhatsApp</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
            <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">WhatsApp</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
          </div>
        </div>
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
                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Communication</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Send Email</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Send SMS</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (Email)</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (SMS)</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Invite to Login (WhatsApp)</div>

                <div className="px-4 py-2 text-[#54585C] text-sm font-bold">Other Actions</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Block</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Unblock</div>
                <div className="px-4 py-2 text-[#54585C] text-sm">Delete</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pagination Component */}
      <div >
        <Pagination
          currentPage={currentPage}
          totalItems={teachersData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Schedules;
