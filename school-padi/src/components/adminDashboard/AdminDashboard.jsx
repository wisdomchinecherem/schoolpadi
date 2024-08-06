
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVolumeUp, faUser, faPlus, faCalendar, faBars, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'; 
import SchoolLogo from '../../assets/schoolpadi-img/school-logo.png';

// Function to format date with ordinal suffix and time
const formatDateTime = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th');

  // Format hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; // Convert to 12-hour format

  return `${dayWithSuffix} ${month}, ${year} ${hours}:${minutes}${ampm}`;
};

const AdminDashboard = () => {
  // current date and time formatted
  const currentDateTime = formatDateTime(new Date());

  // State for controlling hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  // Sample data for the line chart
  const data = [
    { name: '0', Nursery: 400, Primary: 240, Secondary: 240 },
    { name: '1', Nursery: 300, Primary: 139, Secondary: 221 },
    { name: '2', Nursery: 200, Primary: 980, Secondary: 229 },
    { name: '3', Nursery: 278, Primary: 390, Secondary: 200 },
    { name: '4', Nursery: 189, Primary: 480, Secondary: 218 },
    { name: '5', Nursery: 239, Primary: 380, Secondary: 250 },
    { name: '6', Nursery: 349, Primary: 430, Secondary: 210 },
    { name: '7', Nursery: 200, Primary: 250, Secondary: 300 },
    { name: '8', Nursery: 278, Primary: 300, Secondary: 270 },
    { name: '9', Nursery: 350, Primary: 370, Secondary: 320 },
    { name: '10', Nursery: 310, Primary: 310, Secondary: 330 },
    { name: '12', Nursery: 410, Primary: 450, Secondary: 420 },
  ];

  // Sample data for the pie chart
  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  // Sample data for the bar chart
  const barData = [
    { category: 'Jan', Income: 100, Expenses: 90, Balance: 100 },
    { category: 'Jan', Income: 100, Expenses: 120, Balance: 80 },
    { category: 'Feb', Income: 135, Expenses: 145, Balance: 105 },
    { category: 'March', Income: 110, Expenses: 115, Balance: 120 },
    { category: 'April', Income: 100, Expenses: 120, Balance: 140 },
    { category: 'May', Income: 135, Expenses: 145, Balance: 120 },
    { category: 'June', Income: 110, Expenses: 70, Balance: 80 },
    { category: 'July', Income: 100, Expenses: 120, Balance: 140 },
    { category: 'Aug', Income: 60, Expenses: 145, Balance: 155 },
    { category: 'Sept', Income: 110, Expenses: 115, Balance: 120 },
    { category: 'Oct', Income: 100, Expenses: 90, Balance: 140 },
    { category: 'Nov', Income: 135, Expenses: 145, Balance: 155 },
    { category: 'Dec', Income: 110, Expenses: 90, Balance: 100 },
  ];

  // Sample data for the radar chart
  const radarData = [
    { subject: 'Category', A: 120, B: 110, C: 130 },
    { subject: 'Category', A: 98, B: 130, C: 120 },
    { subject: 'Category', A: 86, B: 130, C: 115 },
    { subject: 'Category', A: 99, B: 100, C: 110 },
    { subject: 'Category', A: 85, B: 90, C: 100 },
    { subject: 'Category', A: 65, B: 85, C: 95 },
  ];

  const COLORS = ['#CCE5FF', '#3599FF', '#0274E8', '#027FFF'];


  return (
    
    <>
      <nav className="bg-[#001D3B] p-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          {/* Left section: Logo and welcome message */}
          <div className="flex flex-col items-start">
            <img src={SchoolLogo} alt="School Logo" className="h-6 mb-2" />
            <div className="flex">
              <span className="text-blue-500 mt-4 font-bold text-2xl">Welcome, </span>
              <span className="text-white mt-4 font-bold text-2xl ml-1">Admin</span>
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
                className="w-full md:w-[400px] px-2 py-1 bg-[#01356B] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right section: Icons (hidden on small screens) */}
          <div className={`flex flex-col items-end space-y-2 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-2`}>
            <div className="flex space-x-6">
              {/* Plus Icon */}
              <div className="bg-[#01356B] rounded-full py-1.5 px-2.5">
                <FontAwesomeIcon icon={faPlus} className="text-white text-sm" title="Add" />
              </div>

              {/* Notification Icon */}
              <div className="bg-[#01356B] rounded-full p-1.5 px-2.5">
                <FontAwesomeIcon icon={faBell} className="text-white text-sm" title="Notifications" />
              </div>

              {/* Sound Icon */}
              <div className="bg-[#01356B] rounded-full p-1.5 px-2.5">
                <FontAwesomeIcon icon={faVolumeUp} className="text-white text-sm" title="Sound" />
              </div>

              {/* User Icon */}
              <div className="bg-[#01356B] rounded-full p-1.5 px-2.5 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-white text-sm" title="Account" />
              </div>

              {/* User Icon */}
              <div className="bg-[#01356B] rounded-lg p-1.5 px-2.5 flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-white text-sm" title="Account" />
                <span className="ml-1 text-[#bbb] font-bold hidden md:block text-sm">Admin</span>
              </div>
            </div>

            {/* Calendar Icon with Date and Time (placed beneath the other icons) */}
            <div className="flex items-center space-x-2 text-white pt-4">
              <FontAwesomeIcon icon={faCalendar} className='bg-[#01356B] rounded-full p-1.5 text-sm' title="Calendar"/>
              <span className="hidden md:block text-sm">{currentDateTime}</span>
            </div>
          </div>

        </div>

        {/* Dropdown menu for small screens */}
        <div className={`fixed inset-0 bg-black text-white p-4 ${isMenuOpen ? 'block' : 'hidden'} md:hidden z-50`}>
          <div className="flex justify-between items-center  mb-4">
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
              className="w-full px-2 py-1 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icons in dropdown */}
          <div className="flex space-x-2  mb-4 justify-center">
            <div className="bg-gray-600 p-1.7 px-2.5 rounded-full p-2">
              <FontAwesomeIcon icon={faPlus} className="text-white text-sm" title="Add" />
            </div>

            <div className="bg-gray-600 py-1.7 px-2.5 rounded-full p-2">
              <FontAwesomeIcon icon={faBell} className="text-white text-sm" title="Notifications" />
            </div>

            <div className="bg-gray-600 py-1.7 px-2.5 rounded-full p-2">
              <FontAwesomeIcon icon={faVolumeUp} className="text-white text-sm" title="Sound" />
            </div>

            <div className="bg-gray-600 py-1.7 px-2.5 rounded-full p-2 flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-white text-sm" title="Account" />
              <span className="ml-2 text-[#bbb] font-bold">Admin</span>
            </div>
          </div>

          {/* Links in dropdown, centralized */}
          <ul className="space-y-4 text-center">
            <li className="hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-500 cursor-pointer">Information System</li>
            <li className="hover:text-blue-500 cursor-pointer">Schedules/Comms</li>
            <li className="hover:text-blue-500 cursor-pointer">Graduation/Alumni</li>
            <li className="hover:text-blue-500 cursor-pointer">Finance/Accounting</li>
            <li className="hover:text-blue-500 cursor-pointer">People/Productivity</li>
            <li className="hover:text-blue-500 cursor-pointer">Marketing/Admissions</li>
            <li className="hover:text-blue-500 cursor-pointer">Administration</li>
          </ul>
        </div>

        {/* New section: Text links */}
        <div className="mt-6 hidden md:block">
          <ul className="flex flex-col md:flex-row justify-between items-center text-gray-400 md:space-x-4 space-y-2 md:space-y-0">
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Dashboard
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Information System
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Schedules/Comms
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Graduation/Alumni
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Finance/Accounting
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              People/Productivity
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Marketing/Admissions
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
            <li className="flex flex-col items-center px-4 hover:text-white cursor-pointer">
              Administration
              <span className="block w-2 h-2 mt-2 bg-gray-400 rounded-full hover:bg-white"></span>
            </li>
          </ul>
          <div className="w-full h-0.5 bg-gray-500 mt-4 mb-12"></div>
        </div>
      </nav>



{/* New section: White background with boxes */}
<div className="bg-white p-6 relative">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Box 1: Overlapping the black navbar */}
    <div className="bg-white p-6 rounded-lg shadow-md relative flex flex-col justify-between items-start z-10 md:-mt-12 min-h-[150px]">
      {/* Content for Box 1 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
        <span className="text-sm font-grandis  text-[#C8D2DC]">No of Students</span>
          <span className="text-xl font-bold  font-grandis text-[#6E7479]">12,000</span>
        </div>
        <div className="grid grid-cols-4 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col font-grandis  items-center">
            <span>Active</span>
            <span className="text-xl font-bold">100</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Alumni</span>
            <span className="text-xl font-bold">135</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>License</span>
            <span className="text-xl font-bold">110</span>
          </div>
          <div className="flex flex-col font-grandis  items-center">
            <span>Parents</span>
            <span className="text-xl font-bold">70</span>
          </div>
        </div>
      </div>
    </div>

{/* Box 2: Overlapping the black navbar */}
<div className="bg-white p-6 rounded-lg shadow-md relative flex flex-col justify-between items-start z-10 md:-mt-12 min-h-[150px]">
  {/* Content for Box 2 */}
  <div className="flex flex-col justify-between h-full">
    <div className="flex flex-col items-start mb-4">
      <span className="text-sm font-grandis text-[#C8D2DC]">No of Staff</span>
      <span className="text-xl font-bold font-grandis text-[#6E7479]">400</span>
    </div>
    <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col font-grandis  items-center">
            <span>Admins</span>
            <span className="text-xl font-bold">100</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Teachers</span>
            <span className="text-xl font-bold">135</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Non-teaching</span>
            <span className="text-xl font-bold">110</span>
          </div>
        
        </div>
  </div>
</div>


<div
  className="bg-white p-4 shadow-md row-span-2 relative rounded-lg"
  style={{ marginTop: '-50px', height: 'calc(100% + 50px)', zIndex: 10 }}
>
  <div className="flex justify-between items-center">
    <span className=" text-[#C8D2DC] font-medium">Events</span>
    <span className="text-gray-400">Daily</span>
  </div>
  <h1 className="text-xl font-bold font-grandis text-[#6E7479]">Today</h1>

  {/* Three larger boxes inside double-height box */}
  <div className="mt-4 grid grid-cols-1 gap-4">
    {/* Larger Box 1 */}
    <div className="bg-[#01356B] p-4 shadow-inner rounded-2xl flex-grow">
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
  </div>
</div>





    {/* Box 4: Regular box alignment, equal height for small screens */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[150px]">
      {/* Content for Box 4 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
        <span className="text-sm font-grandis  text-[#C8D2DC]">New Submission</span>
          <span className="text-xl font-bold  font-grandis text-[#6E7479]">800</span>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col font-grandis  items-center">
            <span>Admissions</span>
            <span className="text-xl font-bold">100</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Registration</span>
            <span className="text-xl font-bold">135</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Forms</span>
            <span className="text-xl font-bold">110</span>
          </div>
      
        </div>
      </div>
    </div>

    {/* Box 5: Regular box alignment, equal height for small screens */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[150px]">
      {/* Content for Box 5 */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-start mb-4">
          <span className="text-sm font-grandis  text-[#C8D2DC]">Messages</span>
          <span className="text-xl font-bold  font-grandis text-[#6E7479]">400</span>
        </div>
        <div className="grid grid-cols-3 gap-12 w-full text-sm text-[#6E7479]">
          <div className="flex flex-col font-grandis  items-center">
            <span>Admins</span>
            <span className="text-xl font-bold">100</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Teachers</span>
            <span className="text-xl font-bold">135</span>
          </div>
          <div className="flex flex-col font-grandis items-center">
            <span>Non-Teaching</span>
            <span className="text-xl font-bold">110</span>
          </div>
        </div>
      </div>
    </div>
      </div>

      
      <div className="relative  mt-4 px-4 w-full">
        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 mx-4">
          {/* Line Chart */}
          <div className="bg-white p-4 border rounded-lg">
            <h2 className="text-lg text-[#C8D2DC] font-bold mb-4">Student No Levels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Nursery" stroke="#1671D9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Primary" stroke="#3599FF" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="Secondary" stroke="#F3A218" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          
{/* Pie Chart */}
<div className="bg-white p-4 border rounded-lg relative">
  {/* Status Labels */}
  <div className="absolute top-4 right-4 flex flex-col space-y-1 text-sm">
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#0274E8] inline-block mr-2"></span>
      <span>Accepted</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#CCE5FF] inline-block mr-2"></span>
      <span>In Progress</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#027FFF] inline-block mr-2"></span>
      <span>Pending</span>
    </div>
    <div className="flex items-center">
      <span className="h-3 w-3 rounded-full bg-[#3599FF] inline-block mr-2"></span>
      <span>Rejected</span>
    </div>
  </div>

  <h2 className="text-lg text-[#C8D2DC] font-bold mb-4">Category Distribution</h2>
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={320} height={320}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
</div>




{/* Bar Chart */}
<div className="bg-white font-grandis p-4 border rounded-lg ">
  <h2 className="text-lg font-bold text-[#C8D2DC] mb-4">Finance</h2>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={barData} barGap={18}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Legend />
      <Bar dataKey="Income" fill={COLORS[0]} barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="Expenses" fill={COLORS[1]} barSize={10} radius={[10, 10, 0, 0]} />
      <Bar dataKey="Balance" fill={COLORS[2]} barSize={10} radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>



          {/* Radar Chart */}
          <div className="bg-white p-4 border font-grandis rounded-lg ">
            <h2 className="text-lg font-bold text-[#C8D2DC] mb-4">Enrollment process</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid />  
                
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="A" dataKey="A" stroke={COLORS[0]} fillOpacity={0} />
                <Radar name="B" dataKey="B" stroke={COLORS[1]} fillOpacity={0} />
                <Radar name="C" dataKey="C" stroke={COLORS[2]} fillOpacity={0} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      </div>
      <div className="flex flex-col space-y-4 mt-8 px-8 md:px-20">
  {/* Calendar and Chat Container */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">

{/* Calendar Card */}
<div className="bg-white rounded-lg shadow-md border font-grandis border-gray-300 p-4 md:w-2/3 w-full relative">
  <div className="flex justify-between items-center mb-4">
    <div>
      <h2 className="text-xs font-bold text-gray-300">Calendar</h2>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-xl font-semibold text-gray-800">July 2024</span>
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
      <i className="fas fa-search text-gray-500 cursor-pointer"></i>
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCalendar} className='bg-[#E6EAEF] text-blue-500 rounded-md p-1.5 text-sm'/>
        <button className="flex items-center bg-[#027FFF] text-white px-3 py-1 rounded">
          <i className="fas fa-plus mr-1"></i> Add Event
          <FontAwesomeIcon icon={faPlus} className="text-white px-2 text-sm" title="Add" />
        </button>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-7 text-gray-100 text-center">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
      <div key={index} className="border border-gray-300 font-bold text-gray-700 py-2 text-xs">
        {day}
      </div>
    ))}
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
    {/* Add empty placeholders for the remaining days */}
    {Array.from({ length: 4 }, (_, i) => (
      <div
        key={`empty-${i}`}
        className="h-24 border-r border-t border-gray-300"
      ></div>
    ))}
  </div>
</div>



    {/* Chat Box Card */}
<div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full h-auto relative">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center space-x-2">
      <h2 className="text-blue-500 font-semibold underline">All Chats</h2>
      <span className="text-xs text-white bg-[#027FFF] rounded-xl px-1.5 py-1 text-gray-600">12</span>
    </div>
    <div className="flex items-center space-x-14">
      <div className="flex items-center space-x-1">
        <i className="fas fa-user text-gray-500"></i>
        <FontAwesomeIcon icon={faUser} className="text-gray-300 text-md" title="Sound" />
        <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">3</span>
      </div>
      <div className="flex items-center space-x-1">
        <i className="fas fa-users text-gray-500"></i>
        <FontAwesomeIcon icon={faUsers} className="text-gray-300 text-md" title="Sound" />
        <span className="text-xs bg-gray-300 rounded-xl px-2 py-1 text-gray-600">7</span>
      </div>
    </div>
  </div>
  <div className="flex flex-col space-y-2 divide-y divide-gray-200">
    {[
      { name: "Alice", message: "Hey, how's the project going?", time: "10:15 AM", unread: 2 },
      { name: "Bob", message: "We're on track for the deadline!", time: "9:00 AM", unread: 0 },
      { name: "Charlie", message: "Don't forget the meeting tomorrow.", time: "8:45 AM", unread: 1 },
      { name: "Diana", message: "Can someone review my latest PR?", time: "Yesterday", unread: 0 },
      { name: "Eve", message: "Sure, I'll take a look later today.", time: "Yesterday", unread: 0 },
      { name: "Frank", message: "Great work, team!", time: "2 days ago", unread: 3 },
      { name: "Grace", message: "Looking forward to our next sprint.", time: "2 days ago", unread: 0 },
    ].map((chat, index) => (
      <div key={index} className="flex justify-between items-center py-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
            {chat.name[0]}
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">{chat.name}</p>
            <p className="text-sm text-gray-600 truncate">{chat.message}</p>
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


<div className="flex flex-col space-y-4 mt-8 mb-24 px-8 md:px-20">
  {/* Notice Board/ Birthdays */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">

    {/* Notice Board Card */}
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 md:w-2/3 w-full">
      {/* Header with Notice Board Title */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xs text-[#C8D2DC] font-bold">Notice Board</h2>
          <span className="text-gray-500">19 Jun</span>
        </div>
      </div>
      
      {/* School Information Aligned Horizontally */}
      <div className="overflow-x-auto scrollbar-thin" style={{ scrollbarWidth: 'thin', scrollbarColor: '#C8D2DC #EEF1F9' }}>
        <div className="flex flex-nowrap justify-between text-xs text-[#C8D2DC] mb-6 space-x-4">
          {['School', 'Admin', 'Teachers', 'Students', 'Parents'].map((item, index) => (
            <div key={index} className="text-center flex items-center min-w-[120px] mb-0">
              <h3 className="font-semibold text-sm mr-2 text-gray-400">{item}</h3>
              <span className="text-xs bg-gray-300 rounded-xl px-1.5 py-1 text-gray-400">{[12, 2, 6, 9, 10][index]}</span>
            </div>
          ))}
        </div>
        {/* Grey line under the school information */}
        <div className="border-b border-[#EEF1F4] w-full mb-4"></div>
      </div>


   {/* Notice Content */}
   <div className="space-y-4">
        {['Cancellation of Sports Activities', 'Cancellation of Sports Activities', 'Cancellation of Sports Activities'].map((title, index) => (
          <div key={index} className="relative">
            {/* Date Badge */}
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-white border border-[#015AB5] rounded-full text-[#015AB5] text-xs px-1 py-.5">
              19 Jun
            </div>
            {/* Notice Content */}
            <h4 className="text-xl text-[#027FFF] font-semibold">{title}</h4>
            <p className="text-sm mt-2 text-[#8E959C]">
              Dear Students, Faculty, and Parents, Due to unforeseen circumstances, all sports activities scheduled for this week, including practices and matches, are hereby canceled. This decision has been made to ensure the safety and well-being of all participants.
            </p>
          </div>
        ))}
      </div></div>


    {/* Birthdays Card */}
<div className="bg-white rounded-lg shadow-md border border-gray-300 font-grandis p-4 md:w-1/3 w-full h-auto relative">
<div
  className="bg-white p-4  row-span-2 relative rounded-lg"

>
  <div className="flex justify-between items-center">
    <span className=" text-[#C8D2DC] font-medium">Birthdays</span>
    <span className="text-gray-400">Daily</span>
  </div>
  <h1 className="text-xl font-bold font-grandis text-[#6E7479]">Today</h1>

  {/* Three larger boxes inside double-height box */}
  <div className="mt-4 grid grid-cols-1 gap-4">
    {/* Larger Box 1 */}
    <div className="bg-[#01356B] p-4 shadow-inner rounded-2xl flex-grow">
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

export default AdminDashboard;
