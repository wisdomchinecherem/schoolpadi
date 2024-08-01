import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVolumeUp, faUser, faPlus, faCalendar, faBars } from '@fortawesome/free-solid-svg-icons';
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
} from 'recharts'; // Import from recharts
import SchoolLogo from '../assets/schoolpadi-img/school-logo.png';

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

const Admin = () => {
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
    { category: 'Category 1', value1: 100, value2: 120, value3: 140 },
    { category: 'Category 2', value1: 135, value2: 145, value3: 155 },
    { category: 'Category 3', value1: 110, value2: 115, value3: 120 },
  ];

  // Sample data for the radar chart
  const radarData = [
    { subject: 'Subject 1', A: 120, B: 110, C: 130 },
    { subject: 'Subject 2', A: 98, B: 130, C: 120 },
    { subject: 'Subject 3', A: 86, B: 130, C: 115 },
    { subject: 'Subject 4', A: 99, B: 100, C: 110 },
    { subject: 'Subject 5', A: 85, B: 90, C: 100 },
    { subject: 'Subject 6', A: 65, B: 85, C: 95 },
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
              className="w-full md:w-[400px] px-2 py-1 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right section: Icons (hidden on small screens) */}
        <div className={`flex flex-col items-end space-y-2 ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-2`}>
          <div className="flex space-x-6">
            {/* Plus Icon */}
            <div className="bg-gray-600 rounded-full py-1.5 px-2.5">
              <FontAwesomeIcon icon={faPlus} className="text-white text-sm" title="Add" />
            </div>

            {/* Notification Icon */}
            <div className="bg-gray-600 rounded-full p-1.5 px-2.5">
              <FontAwesomeIcon icon={faBell} className="text-white text-sm" title="Notifications" />
            </div>

            {/* Sound Icon */}
            <div className="bg-gray-600 rounded-full p-1.5 px-2.5">
              <FontAwesomeIcon icon={faVolumeUp} className="text-white text-sm" title="Sound" />
            </div>

            {/* User Icon */}
            <div className="bg-gray-600 rounded-full p-1.5 px-2.5 flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-white text-sm" title="Account" />
            </div>

            {/* User Icon */}
            <div className="bg-gray-600 rounded-lg p-1.5 px-2.5 flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-white text-sm" title="Account" />
              <span className="ml-1 text-[#bbb] font-bold hidden md:block text-sm">Admin</span>
            </div>
          </div>

          {/* Calendar Icon with Date and Time (placed beneath the other icons) */}
          <div className="flex items-center space-x-2 text-white pt-4">
            <FontAwesomeIcon icon={faCalendar} className='bg-gray-600 rounded-full p-1.5 text-sm' title="Calendar"/>
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
  <div className="px-4"> {/* Add horizontal padding */}
    <div className="grid grid-cols-4 gap-12 w-full text-sm text-[#6E7479]">
      <div className="flex flex-col font-grandis items-center">
        <span>Admins</span>
        <span className="text-xl font-bold">100</span>
      </div>
      <div className="flex flex-col font-grandis items-center">
        <span>Teachers</span>
        <span className="text-xl font-bold">135</span>
      </div>
      <div className="flex flex-col font-grandis items-center">
        <span className="whitespace-nowrap">Non-teaching</span>
        <span className="text-xl font-bold">110</span>
      </div>
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
      <div className="grid grid-cols-4 gap-12 w-full text-sm text-[#6E7479]">
        <div className="flex flex-col font-grandis  items-center">
          <span>Admission</span>
          <span className="text-xl font-bold">100</span>
        </div>
        <div className="flex flex-col font-grandis items-center">
          <span>Registration</span>
          <span className="text-xl font-bold">135</span>
        </div>
        <div className="flex flex-col font-grandis items-center">
          <span>Form</span>
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
      <div className="grid grid-cols-4 gap-12 w-full text-sm text-[#6E7479]">
        <div className="flex flex-col font-grandis  items-center">
          <span>Admins</span>
          <span className="text-xl font-bold">100</span>
        </div>
        <div className="flex flex-col font-grandis items-center">
          <span>Teachers</span>
          <span className="text-xl font-bold">135</span>
        </div>
        <div className="flex flex-col font-grandis items-center">
        <span className="whitespace-nowrap">Non-teaching</span>
          <span className="text-xl font-bold">110</span>
        </div>
      </div>
    </div>
  </div>

      <div className="relative mt-4 px-4">
        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 mx-4">
          {/* Line Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Student Enrollment Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Nursery" stroke={COLORS[0]} />
                <Line type="monotone" dataKey="Primary" stroke={COLORS[1]} />
                <Line type="monotone" dataKey="Secondary" stroke={COLORS[2]} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Distribution by Group</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Revenue by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value1" fill={COLORS[0]} barSize={20} />
                <Bar dataKey="value2" fill={COLORS[1]} barSize={20} />
                <Bar dataKey="value3" fill={COLORS[2]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Subject Performance Comparison</h2>
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
      </div>
    </>
  );
};

export default Admin;