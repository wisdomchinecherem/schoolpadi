import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaExclamation, FaTrashAlt, FaLock, FaSave } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import Pagination from "../reusables/filters/Pagination";
import { useNavigate } from "react-router-dom";

const Schedules = () => {
  const navigate = useNavigate();
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page

  // Mock data for table
  const [tableData] = useState([
    {
      title: "Introduction to Class",
      description: "Dear All, We dearly welcome you all to SchoolPadi. [...]",
      date: "02-07-2024",
      sentTo: "Admins, Teachers, Students, Parents(Active)",
    },
  ]);

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(tableData.slice(start, end));
  }, [currentPage, tableData]);

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
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4">
          <div className="grid grid-cols-6 gap-2">
            <a href="/Schedules" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Notices</span>
              <div className="bg-blue-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                12
              </div>
            </a>
            <a href="/Emails" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Emails</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                8
              </div>
            </a>
            <a href="/SMS" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">SMS</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                3
              </div>
            </a>
            <a href="/WhatsApp" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">WhatsApp</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
            <a href="/LMS" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">LMS</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
            <a href="/Events" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Events</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
          </div>
        </div>
      </div>

     {/* Table */}
<div className="px-4 py-4">
  <div className="overflow-x-auto px-4 py-4">
    <div className="border-0 md:border-2 border-gray-300 rounded-lg p-2">

      <table className="min-w-full table-auto border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-2 text-left text-xs sm:text-sm font-semibold text-gray-600">Title</th>
            <th className="px-6 py-2 text-left text-xs sm:text-sm font-semibold text-gray-600">Description</th>
            <th className="px-6 py-2 text-left text-xs sm:text-sm font-semibold text-gray-600">Date</th>
            <th className="px-6 py-2 text-left text-xs sm:text-sm font-semibold text-gray-600">Sent To</th>
            <th className="px-6 py-2 text-left text-xs sm:text-sm font-semibold text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-2 text-xs sm:text-sm text-gray-600">{item.title}</td>
              <td className="px-6 py-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">{item.description}</td>
              <td className="px-6 py-2 text-xs sm:text-sm text-gray-600">{item.date}</td>
              <td className="px-6 py-2 text-xs sm:text-sm text-gray-600">
                {item.sentTo.split(', ').map((word, index) => {
                  const colors = ['bg-blue-400', 'bg-blue-400', 'bg-blue-400', 'bg-blue-400', 'bg-blue-400'];
                  const colorClass = colors[index % colors.length]; // Cycle through colors

                  return (
                    <span key={index} className={`px-1 mx-1 text-white ${colorClass} rounded`}>
                      {word}
                    </span>
                  );
                })}
              </td>
              <td className="py-2 px-4 flex space-x-2 text-xs">
                  <FaExclamation className="text-[#8E959C]" />
                  <FaTrashAlt className="text-[#8E959C]" />
                  <FaLock className="text-[#8E959C]" />
                  <FaSave className="text-[#8E959C]" />
                  <FaTrash className="text-[#8E959C]" /> 
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

      {/* Pagination */}
      <div className="rounded border text-[#8E959C]">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={tableData.length}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Schedules;
