import { FaCheckSquare } from 'react-icons/fa';
import { GoHash } from 'react-icons/go';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

// Function to generate days in a month
const generateDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate(); // Get number of days in the month
  return Array.from({ length: daysInMonth }, (_, i) => i + 1); // Generate an array [1, 2, ..., daysInMonth]
};

// Sample data for students
const studentsData = [
  {
    id: '01',
    name: 'Alison Werner',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['present', 'absent', 'present', 'holiday', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'null'],
  },
  {
    id: '02',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['absent', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent'],
  },
  // Add more students data up to 8
  {
    id: '03',
    name: 'Jane Smith',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['present', 'present', 'absent', 'holiday', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present'],
  },
  {
    id: '04',
    name: 'Emma Brown',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['absent', 'absent', 'present', 'holiday', 'present', 'absent', 'holiday', 'present', 'present', 'absent', 'holiday', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday', 'present'],
  },
  {
    id: '05',
    name: 'Chris Evans',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['present', 'holiday', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'present'],
  },
  {
    id: '06',
    name: 'Sophia Turner',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['holiday', 'present', 'absent', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday'],
  },
  {
    id: '07',
    name: 'Michael Scott',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['absent', 'present', 'holiday', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'present', 'absent', 'present', 'holiday', 'absent', 'present', 'present'],
  },
  {
    id: '08',
    name: 'Pam Beesly',
    avatar: 'https://via.placeholder.com/40',
    attendance: ['present', 'present', 'present', 'holiday', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'holiday', 'present', 'absent', 'holiday', 'present', 'absent', 'present', 'absent', 'holiday'],
  },
];

const AttendanceTable = () => {
  const month = 6; // Example: June (6th month)
  const year = 2024; // Example Year
  const days = generateDaysInMonth(month, year);

  const statusIcons = {
    present: <FaCheckSquare className='text-[green] text-2xl' />,
    absent: <MdOutlineCancelPresentation className="text-[#D42620] text-2xl" />,
    holiday: <TbWorld className="text-[#3599FF] text-2xl" />,
    null: < GoHash className='text-[#8E959C] text-2xl'/>,
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg overflow-x-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-bold">Attendance List</h2>
        <p className="text-gray-500">Month: June</p>
      </div>
      <div className="flex mb-2 space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-green-500">{statusIcons['present']}</span>
          <span>Present</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-red-500">{statusIcons['absent']}</span>
          <span>Absent</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-blue-500">{statusIcons['holiday']}</span>
          <span>Holiday</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-gray-500">{statusIcons['null']}</span>
          <span>Null</span>
        </div>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border text-[#8E959C] border-gray-200 px-4 py-2 text-left">S/N</th>
            <th className="border text-[#8E959C] border-gray-200 px-4 py-2 text-left">Student</th>
            {days.map((day) => (
              <th key={day} className="border text-[#8E959C] font-normal border-gray-200 px-4 py-2 text-center">
                {`Day ${day}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-200 px-4 py-2  ">{student.id}</td>
              <td className="border border-gray-200 px-4 py-2 min-w-48 flex items-center space-x-2">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{student.name}</span>
              </td>
              {days.map((_, dayIndex) => (
                <td key={dayIndex} className="border border-gray-200 px-4 py-2 text-center">
                  {statusIcons[student.attendance[dayIndex]] || statusIcons['null']}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
