import { faCalendar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Calendar = () => {
  return (
    <>
      {" "}
      <div className="bg-white rounded-lg shadow-md border font-grandis border-gray-300 p-4 w-full relative">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xs font-bold text-gray-300">Calendar</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-xl font-semibold text-gray-800">
                July 2024
              </span>
              <div className="flex items-center border border-blue-500 rounded px-2 py-1 text-blue-500 text-xs cursor-pointer">
                <span>Month</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative flex flex-col items-end space-y-2 p-2">
              <FontAwesomeIcon
                icon={faCalendar}
                className="bg-[#E6EAEF] text-blue-500 rounded-md p-1 text-xs sm:text-sm"
              />
              <div className="flex items-center space-x-2">
                <i className="fas fa-search bg-[#E6EAEF] text-blue-500 rounded-md p-1 text-xs sm:text-sm cursor-pointer"></i>
                <button className="flex items-center bg-[#027FFF] text-white px-2 py-1 text-xs sm:text-sm rounded">
                  <i className="mr-1"></i> Add Event
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-white px-1 text-xs sm:text-sm"
                    title="Add"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 text-gray-100 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div
                key={index}
                className="border border-gray-300 font-bold text-gray-700 py-2 text-xs"
              >
                {day}
              </div>
            )
          )}
        </div>
        <div className="grid grid-cols-7 text-center border-1 text-gray-400 border-b border-gray-300">
          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className="h-24 flex items-start justify-start border-r border-t border-gray-300"
            >
              <span className="text-xs p-2">{i + 1}</span>
            </div>
          ))}

          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={`empty-${i}`}
              className="h-24 border-r border-t border-gray-300"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;
