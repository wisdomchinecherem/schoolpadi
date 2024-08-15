import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaExclamation, FaTrashAlt, FaLock, FaSave } from 'react-icons/fa';
import Pagination from "../reusables/filters/Pagination";
import { useNavigate } from "react-router-dom";

const Parents = () => {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page

  const parentsData = [
    { name: 'John Doe', email: 'johndoe@example.com', contact: '123-456-7890', status: 'Active', invited: 'Yes' },
    { name: 'Jane Smith', email: 'janesmith@example.com', contact: '098-765-4321', status: 'Inactive', invited: 'No' },
    { name: 'Robert Brown', email: 'robertbrown@example.com', contact: '321-654-9870', status: 'Active', invited: 'Yes' },
    { name: 'Emily Johnson', email: 'emilyjohnson@example.com', contact: '654-987-1234', status: 'Pending', invited: 'No' },
    { name: 'Michael Davis', email: 'michaeldavis@example.com', contact: '987-321-6540', status: 'Active', invited: 'Yes' },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(parentsData.slice(start, end));
  }, [currentPage]);

  return (
    <>
      {/* Header Section */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">Parents List</span>
        <button className="bg-white text-[#014F9E] py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0 mb-2">
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Add Parent
        </button>
      </div>

      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4">
          <div className="grid grid-cols-4 gap-2">
            <a href="/InfomationSystem" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Students</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                12
              </div>
            </a>
            <a href="/Teachers" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Teachers</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                8
              </div>
            </a>
            <a href="/AdminPage" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Admin</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                3
              </div>
            </a>
            <a href="/Parents" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Parents</span>
              <div className="bg-blue-600 text-[#FFFFFF] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
                25
              </div>
            </a>
          </div>
        </div>
      </div>
  
      {/* Table Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#FAFBFC]">
                <th className="py-2 px-4 text-[#8E959C] border-b whitespace-nowrap">Parent's Name</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Parent's Email</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Contact</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Status</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Invited</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Parents</th>
                <th className="py-2 px-4 text-[#8E959C] border-b">Icons</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((parent, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 text-[#8E959C] whitespace-nowrap px-4">{parent.name}</td>
                  <td className="py-2 px-4 text-[#8E959C]">{parent.email}</td>
                  <td className="py-2 px-4 text-[#8E959C]">{parent.contact}</td>
                  <td className={`py-2 px-4 ${parent.status === 'Active' ? 'text-green-600' : parent.status === 'Inactive' ? 'text-orange-600' : 'text-gray-600'}`}>
                    <span className={`bg-${parent.status === 'Active' ? 'green-200' : parent.status === 'Inactive' ? 'orange-200' : 'gray-200'} text-${parent.status === 'Active' ? 'green-600' : parent.status === 'Inactive' ? 'orange-600' : 'gray-600'} rounded-full px-2 py-1 text-xs`}>
                      {parent.status}
                    </span>
                  </td>
                  <td className={`py-2 px-4 ${parent.invited === 'Yes' ? 'text-green-600' : 'text-red-600'}`}>
                    <span className={`bg-${parent.invited === 'Yes' ? 'green-200' : 'red-200'} text-${parent.invited === 'Yes' ? 'green-600' : 'red-600'} rounded-full px-2 py-1 text-xs`}>
                      {parent.invited}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-[#8E959C]">
                    <span className="bg-sky-200 text-sky-800 rounded-full px-2 py-1 text-xs whitespace-nowrap">
                      {parent.name}
                    </span>
                  </td>
                  <td className="py-2 px-4 flex space-x-2">
                    <FaExclamation className="text-[#8E959C]" />
                    <FaTrashAlt className="text-[#8E959C]" />
                    <FaLock className="text-[#8E959C]" />
                    <FaSave className="text-[#8E959C]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={parentsData.length}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Parents;
