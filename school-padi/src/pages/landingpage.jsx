// import Navbar from "../components/Landingpage/Navbar";

//function App() {
  //   return (
   //    <div className="max-w-[100vw]  overflow-hidden">
    //   </div>
//  );
//}

//export default App;   






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
              <FontAwesomeIcon icon={faCalendar} className="bg-gray-600 rounded-full p-1.5 text-sm" title="Calendar" />
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
          <ul className="space-y-4">
            <li><a href="#" className="text-white hover:underline">Dashboard</a></li>
            <li><a href="#" className="text-white hover:underline">Reports</a></li>
            <li><a href="#" className="text-white hover:underline">Settings</a></li>
            <li><a href="#" className="text-white hover:underline">Profile</a></li>
            <li><a href="#" className="text-white hover:underline">Logout</a></li>
          </ul>
        </div>
      </nav>

      <div className="relative mt-4 px-4">
        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
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
                <Bar dataKey="value1" fill={COLORS[0]} />
                <Bar dataKey="value2" fill={COLORS[1]} />
                <Bar dataKey="value3" fill={COLORS[2]} />
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
                <Radar name="A" dataKey="A" stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.6} />
                <Radar name="B" dataKey="B" stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.6} />
                <Radar name="C" dataKey="C" stroke={COLORS[2]} fill={COLORS[2]} fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
