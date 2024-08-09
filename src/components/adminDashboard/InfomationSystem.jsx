import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronDown, faBars  } from '@fortawesome/free-solid-svg-icons';


const InfomationSystem = () => {


  const dropdownData = [
    { heading: 'Academic Session', label: 'Select Academic Session', options: ['2023/2024', '2022/2023', '2021/2022'] },
    { heading: 'Section', label: 'Select Section', options: ['Session 1', 'Session 2', 'Session 3'] },
    { heading: 'Class', label: 'Select Class', options: ['Class 1', 'Class 2', 'Class 3'] },
    { heading: 'Subjects', label: 'Select Subjects', options: ['Math', 'Science', 'English'] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>

{/* New Section: Student List Header */}
<div className="bg-[#014F9E] p-2 flex justify-between items-center px-4 sm:p-4 sm:px-6">
  <span className="text-white text-lg font-semibold leading-none sm:text-xl mt-[-4px]">Student List</span> 
  <button className="bg-white text-[#014F9E] font-bold py-1 px-2 rounded flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-[-4px]"> {/* Adjusted margin-top */}
    <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
    Add Student
  </button>
</div>



{/* Overlapping White Box */}
<div className="relative -top-6 px-6">
  <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4"> {/* Reduced vertical padding */}
    <div className="grid grid-cols-4 gap-2"> {/* Reduced grid gap */}
      <a href="/students" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="font-bold text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Students</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-sm">
          12
        </div>
      </a>
      <a href="/teachers" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="font-bold text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Teachers</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-sm">
          8
        </div>
      </a>
      <a href="/admin" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="font-bold text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Admin</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-sm">
          3
        </div>
      </a>
      <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
        <span className="font-bold text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">Parents</span>
        <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-sm">
          25
        </div>
      </a>
    </div>
  </div>
</div>



{/* Four Small Rectangles */}
<div className="flex flex-wrap justify-center gap-8 mt-6 w-full md:px-20">
      {dropdownData.map((data, index) => (
        <div key={index} className="w-full md:w-[300px]">
          <h2 className="text-[#101828] font-bold mb-2">{data.heading}</h2>
          <div
            className="relative bg-white border w-full h-20 rounded-md flex items-center justify-between px-4 cursor-pointer"
            onClick={() => toggleDropdown(index)}
          >
            <span className="text-[#D3DBE3] font-bold">{data.label}</span>
            <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3]" />
            {openIndex === index && (
              <ul className="absolute top-full left-0 right-0 bg-gray-100 border  shadow-lg z-10">
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

    <div className="p-2 flex justify-between items-center px-6 py-4 sm:p-4 sm:px-8">
      {/* Left-side Container for Placeholder and Filter */}
      <div className="flex space-x-4">
        {/* Placeholder Card - Increased Width */}
        <span className="text-[#D3DBE3] border py-1 px-6 rounded flex items-center text-sm leading-none sm:py-2 sm:px-8 sm:text-base mt-[-4px]">
          PlaceHolder
        </span>
        {/* Filter Card with Updated Icon */}
        <button className="text-[#8E959C] border font-bold py-1 px-2 rounded flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-[-4px]">
          <FontAwesomeIcon icon={faBars} className="mr-1 sm:mr-2" />
          Filter
        </button>
      </div>
      {/* Selected Button on the Right */}
      <button className="text-[#8E959C] border font-bold py-1 px-2 rounded flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-[-4px]">
        <FontAwesomeIcon icon={faPlus} className="mr-1 border rounded-full p-1 sm:mr-2" />
        Selected
        <FontAwesomeIcon icon={faChevronDown} className="text-[#D3DBE3] ml-2" />
      </button>
    </div>

    </>
    
  );
};

export default InfomationSystem;
