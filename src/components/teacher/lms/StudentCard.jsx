import PropTypes from 'prop-types';

// Icon imports (Replace these with your actual icons)
import { FaBook, FaUserFriends, FaCommentDots, FaInfoCircle, FaBell, FaUser } from 'react-icons/fa';

// The Card Component
export default function  SubjectCard ({ title, section, label }) {
    const   icons = [FaBook, FaUserFriends, FaCommentDots, FaInfoCircle, FaBell, FaUser]

    return (
      <div className="flex flex-col py-6 justify-between items-center bg-white border rounded-lg  w-full ">
        {/* Top Right Label */}
        {label && (
          <span className="self-end px-2 py-0.5 text-sm text-blue-700 bg-blue-100 rounded-full mb-2">
            {label}
          </span>
        )}
  
        {/* Title Section */}
        <div className="flex flex-col my-2 items-center justify-center text-center">
          <h3 className="text-lg font-semibold text-[#54585C]">{title}</h3>
          <p className="text-gray-500">{section}</p>
        </div>
  
        {/* Icons Section */}
        <hr className='border-1 w-full border-gray-400 my-3' />
        <div className="flex justify-between p-2 items-center w-full mt-4 text-gray-400">
          {icons.map((IconComponent, index) => (
            <IconComponent key={index} className="w-5 h-5 hover:text-blue-500 cursor-pointer transition" />
          ))}
        </div>
      </div>
    );
  }
  // Prop Types for Type Checking
SubjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    label: PropTypes.string,
  };
  
  