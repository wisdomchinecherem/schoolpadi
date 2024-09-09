import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "../../reusables/student/Calendar";

const Planning = () => {
  return (
    <>
      <div>
        <div className="flex flex-col space-y-4 mt-8 ">
          {/* Calendar and Chat Container */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 ">
            {/* Calendar Card */}
            <div className="md:w-2/3">
              <Calendar />
            </div>
            {/* Chat Box Card */}
            <div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full  relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-blue-500 font-semibold underline">
                    All Chats
                  </h2>
                  <span className="text-xs bg-[#027FFF] rounded-xl px-1.5 py-1 text-gray-600">
                    12
                  </span>
                </div>
                <div className="flex items-center space-x-14">
                  <div className="flex items-center space-x-1">
                    <i className=" text-gray-500"></i>
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-gray-300 text-md"
                      title="Sound"
                    />
                    <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">
                      3
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className=" text-gray-500"></i>
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="text-gray-300 text-md"
                      title="Sound"
                    />
                    <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">
                      7
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 divide-y divide-gray-200">
                {[
                  {
                    name: "Alice",
                    message: "Hey, how's the project going?",
                    time: "10:15 AM",
                    unread: 2,
                  },
                  {
                    name: "Bob",
                    message: "We're on track for the deadline!",
                    time: "9:00 AM",
                    unread: 0,
                  },
                  {
                    name: "Charlie",
                    message: "Don't forget the meeting tomorrow.",
                    time: "8:45 AM",
                    unread: 1,
                  },
                  {
                    name: "Diana",
                    message: "Can someone review my latest PR?",
                    time: "Yesterday",
                    unread: 0,
                  },
                  {
                    name: "Eve",
                    message: "Sure, I'll take a look later today.",
                    time: "Yesterday",
                    unread: 0,
                  },
                  {
                    name: "Frank",
                    message: "Great work, team!",
                    time: "2 days ago",
                    unread: 3,
                  },
                  {
                    name: "Grace",
                    message: "Looking forward to our next sprint.",
                    time: "2 days ago",
                    unread: 0,
                  },
                ].map((chat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <div className="flex items-center  space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                        {chat.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold">{chat.name}</p>
                        <p className="text-sm text-gray-600 w-[70%] truncate">
                          {chat.message}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-xs text-gray-500">{chat.time}</span>
                      {chat.unread > 0 && (
                        <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-8 mb-24">
        {/* Notice Board/ Birthdays */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {/* Notice Board Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 md:w-2/3 w-full">
            {/* Header with Notice Board Title */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xs text-[#C8D2DC] font-bold">
                  Notice Board
                </h2>
                <span className="text-gray-500">19 Jun</span>
              </div>
            </div>

            {/* School Information Aligned Horizontally */}
            <div
              className="overflow-x-auto scrollbar-thin"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#C8D2DC #EEF1F9",
              }}
            >
              <div className="flex flex-nowrap justify-between text-xs text-[#C8D2DC] mb-6 space-x-4">
                {["School", "Admin", "Teachers", "Students", "Parents"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="text-center flex items-center min-w-[120px] mb-0"
                    >
                      <h3 className="font-semibold text-sm mr-2 text-gray-400">
                        {item}
                      </h3>
                      <span className="text-xs bg-gray-100 rounded-xl px-1 py-.5 text-gray-400">
                        {[12, 2, 6, 9, 10][index]}
                      </span>
                    </div>
                  )
                )}
              </div>
              {/* Grey line under the school information */}
              <div className="border-b border-[#EEF1F4] w-full mb-4"></div>
            </div>

            {/* Notice Content */}
            <div className="space-y-4">
              {[
                "Cancellation of Sports Activities",
                "Cancellation of Sports Activities",
                "Cancellation of Sports Activities",
              ].map((title, index) => (
                <div key={index} className="relative">
                  {/* Date Badge */}
                  <div className="relative p-4 bg-white rounded-lg shadow-sm sm:shadow-none">
                    {/* Date Badge */}
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white border border-[#015AB5] rounded-full text-[#015AB5] text-xs sm:text-sm px-2 py-0.5 hidden sm:block">
                      19 Jun
                    </div>
                    {/* Notice Content */}
                    <h4 className="text-lg sm:text-xl text-[#027FFF] ">
                      {title}
                    </h4>
                    <p className="text-xs sm:text-sm mt-2 text-[#8E959C] leading-relaxed">
                      Dear Students, Faculty, and Parents, Due to unforeseen
                      circumstances, all sports activities scheduled for this
                      week, including practices and matches, are hereby
                      canceled. This decision has been made to ensure the safety
                      and well-being of all participants.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Birthdays Card */}
          <div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full h-auto relative">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-[#C8D2DC] font-medium">Birthdays</span>
                <span className="text-gray-400">Daily</span>
              </div>
              <h1 className="text-xl font-bold font-grandis text-[#6E7479]">
                Today
              </h1>

              {/* Three larger boxes inside double-height box */}
              <div className="mt-4 grid grid-cols-1 gap-4">
                {/* Larger Box 1 */}
                <div className="bg-[#014F9E] p-4 shadow-inner rounded-2xl flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Revenue</span>
                    <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                      11:00am
                    </span>
                  </div>
                </div>

                {/* Larger Box 2 */}
                <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Expenses</span>
                    <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                      11:00am
                    </span>
                  </div>
                </div>

                {/* Larger Box 3 */}
                <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Net Profit</span>
                    <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                      11:00am
                    </span>
                  </div>
                </div>

                {/* Larger Box 4 */}
                <div className="bg-[#F2F5F7] p-4 shadow-inner rounded-2xl flex-grow">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Expenses</span>
                    <span className="bg-white text-sm text-gray-600 px-2 py-1 rounded-2xl shadow">
                      11:00am
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
