import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IoChatbubbles, IoEye, IoMenu } from "react-icons/io5"; 
import { Link } from "react-router-dom";


const SMS = () => {
  return (
    <>
      {/* New Section: Student List Header */}
      <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
        <span className="text-white text-lg leading-none sm:text-xl -mt-2 mb-8">SMS</span>
        <button className="bg-white text-[#014F9E] py-1 px-2 rounded mb-8 flex items-center text-sm leading-none sm:py-2 sm:px-4 sm:text-base mt-0 mb-2">
          <FontAwesomeIcon icon={faPlus} className="mr-1 sm:mr-2" />
          Compose
        </button>
      </div>

      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
        <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4">
          <div className="grid grid-cols-6 gap-2">
            <a href="/Schedules" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Notices</span>
              <div className="bg-gray-300 text-[#8E959C] rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
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
              <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0">SMS</span>
              <div className="bg-blue-600 text-white rounded-full h-4 w-4 flex items-center justify-center text-[0.65rem] sm:h-6 sm:w-6 sm:text-xs">
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


      <div className="p-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 py-2 sm:p-4 sm:px-12 lg:px-24">
  {/* Cards Container */}
  <div className="flex space-x-2 sm:space-x-4 justify-center">
    {/* Usage Stats Card */}
    <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
      <Link to="/usage-stats" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
        <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
          <IoEye /> {/* Eye icon */}
        </div>
        <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">Usage Stats</span>
      </Link>
    </div>

    {/* SMS Logs Card */}
    <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
      <Link to="/sms-logs" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
        <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
          <IoChatbubbles /> {/* Chat bubbles icon */}
        </div>
        <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">SMS Logs</span>
      </Link>
    </div>

    {/* SMS Credit Logs Card */}
    <div className="flex border rounded-lg p-1 sm:p-2 group hover:bg-sky-100 hover:border-blue-500 hover:cursor-pointer transition-all duration-300">
      <Link to="/sms-credit-logs" className="flex items-center text-[#8E959C] text-[10px] sm:text-md gap-x-1 group-hover:text-blue-500">
        <div className="flex items-center bg-white rounded-full text-[#D3DBE3] text-[12px] sm:text-xl p-1 sm:p-2 px-2 sm:px-3 group-hover:bg-sky-100 group-hover:text-blue-500">
          <IoMenu /> {/* Hamburger menu icon */}
        </div>
        <span className="text-[#D3DBE3] text-[10px] sm:text-base group-hover:text-blue-500">SMS Credit Logs</span>
      </Link>
    </div>
  </div>
</div>




    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SMS;
