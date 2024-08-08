import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SchoolLogo from '../../assets/schoolpadi-img/school-logo.png';
import { faBell, faUser, faPlus, faCalendar, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { IoChatbubbles } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { FaPlusCircle } from "react-icons/fa";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const formatDateTime = (date) => {

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th');

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12;

  return `${dayWithSuffix} ${month}, ${year} ${hours}:${minutes}${ampm}`;
};

const InfomationSystem = () => {
  const currentDateTime = formatDateTime(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownData = [
    { heading: 'Academic Session', label: 'Select Academic Session', options: ['2023/2024', '2022/2023', '2021/2022'] },
    { heading: 'Section', label: 'Select Session', options: ['Session 1', 'Session 2', 'Session 3'] },
    { heading: 'Class', label: 'Select Class', options: ['Class 1', 'Class 2', 'Class 3'] },
    { heading: 'Subjects', label: 'Select Subjects', options: ['Math', 'Science', 'English'] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>
        <div className='overflow-x-hidden'>
      <nav className="bg-[#014F9E] p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          {/* Left section: Logo and welcome message */}
          <div className="flex flex-col items-start">
            <img src={SchoolLogo} alt="School Logo" className="h-6 mb-2" />
            <div className="flex">
              <span className="text-[#FFFFFF] mt-4 font-bold text-2xl">Welcome, </span>
              <span className="text-[#FFFFFF] mt-4 font-bold text-2xl ml-1">Admin</span>
            </div>
          </div>

          {/* Hamburger icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>

          {/* Center section: Search bar (hidden on small screens) */}
          <div className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex-grow mb-4 md:mb-0 flex justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-[400px] px-2 py-1 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right section: Icons (hidden on small screens) */}
          <div className={`flex flex-col items-end space-y-2 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-2`}>
            <div className="flex space-x-6 ">
              <div className="flex items-center bg-white rounded-full text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
                <FaPlusCircle />
              </div>

              <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
                <FontAwesomeIcon icon={faBell} className="text-[#014F9E] text-sm" title="Notifications" />
              </div>

              <div className="flex items-center bg-white rounded-full text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
                <IoChatbubbles />
              </div>

              <div className="flex items-center bg-white rounded-full text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
                <GrAnnounce />
              </div>

              <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-[#014F9E] text-sm" title="Account" />
              </div>
            </div>

            {/* Calendar Icon with Date and Time (placed beneath the other icons) */}
            <div className="flex items-center space-x-2 text-white pt-4">
              <FontAwesomeIcon icon={faCalendar} className='bg-[#FFFFFF] text-[#014F9E] rounded-full p-1.5 text-sm' title="Calendar" />
              <span className="hidden md:block text-sm">{currentDateTime}</span>
            </div>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        <div className={`fixed inset-0 bg-[#014F9E] text-white p-4 ${isMenuOpen ? 'block' : 'hidden'} md:hidden z-50`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Menu</span>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>

          {/* Search bar in dropdown */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           {/* Icons in dropdown */}
           <div className="flex space-x-6  mb-4 justify-center">

             {/* Plus Icon */}
             <div className="flex items-center bg-white rounded-full  text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
            <FaPlusCircle />
          </div> 
 
            {/* Notification Icon */}
            <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
                <FontAwesomeIcon icon={faBell} className="text-[#014F9E] text-sm" title="Notifications" />
              </div>

              <div className="flex items-center bg-white rounded-full text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
            <IoChatbubbles />
          </div>

              {/* Sound Icon */}
              <div className="flex items-center bg-white rounded-full text-[#014F9E] text-sm bg-[#FFFFFF] rounded-full p-1.5 px-2.5">
            <GrAnnounce />
          </div>

              {/* User Icon */}
              <div className="bg-[#FFFFFF] rounded-full p-1.5 px-2.5 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-[#014F9E] text-sm" title="Account" />
              </div>
           </div>

          {/* Links in dropdown, centralized */}
          <ul className="space-y-4 text-left justify-center ">
            <li className="hover:text-black font-semibold cursor-pointer">Dashboard</li>
            <li className="hover:text-black font-semibold cursor-pointer">Information System</li>
            <li className="hover:text-black font-semibold cursor-pointer">Schedules/Comms</li>
            <li className="hover:text-black font-semibold cursor-pointer">Graduation/Alumni</li>
            <li className="hover:text-bblack font-semibold cursor-pointer">Finance/Accounting</li>
            <li className="hover:text-bblack font-semibold cursor-pointer">People/Productivity</li>
            <li className="hover:text-black font-semibold cursor-pointer">Marketing/Admissions</li>
            <li className="hover:text-black font-semibold cursor-pointer">Administration</li>
          </ul>
        </div>



      {/* Existing Content Below */}
      <div className="mt-6 hidden md:block">
        <ul className="flex flex-col md:flex-row justify-between items-center text-[#FFFFFF] md:space-x-4 space-y-2 md:space-y-0">
          <li className="flex flex-col items-center px-4 cursor-pointer">
            <a href="/AdminDashboard" className="flex items-center font-semibold ">
              Dashboard
            </a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/InfomationSystem" className="flex items-center font-semibold text-blue-500 bg-white rounded-lg px-3 py-1">Information System</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/Schedules" className="flex items-center font-semibold">Schedules/Comms</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/Draduation" className="flex items-center font-semibold">Graduation/Alumni</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/finance-accounting" className="flex items-center font-semibold">Finance/Accounting</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/people-productivity" className="flex items-center font-semibold">People/Productivity</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/marketing-admissions" className="flex items-center font-semibold">Marketing/Admissions</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
          <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
            <a href="/administration" className="flex items-center ">Administration</a>
            <span className="block w-2 h-2 mt-2 bg-[#FFFFFF] rounded-full hover:bg-white"></span>
          </li>
        </ul>
        <div className="w-full h-0.5 bg-[#FFFFFF] mt-4 mb-12"></div>
      </div>        
{/* New Section: Student List Header */}
<div className="bg-[#014F9E] p-2 flex justify-between items-center px-4 sm:p-4 sm:px-6">
  <span className="text-white text-lg font-semibold leading-none sm:text-xl mt-[-4px]">Student List</span> {/* Adjusted margin-top */}
  <button className="bg-white text-[#014F9E] font-bold py-1 px-2 rounded flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-[-4px]"> {/* Adjusted margin-top */}
    <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
    Add Student
  </button>
</div>


      </nav>

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
              <ul className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-10">
                {data.options.map((option, i) => (
                  <li key={i} className="px-4 py-2 hover:bg-gray-100">
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>

    </div>

    </>
    
  );
};

export default InfomationSystem;
