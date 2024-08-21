import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PropTypes from "prop-types"

export default function EnrollmentDropdownItem  ({ year, section, status, subjects, electives })  {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-b">
        <div
          onClick={handleToggle}
          className="cursor-pointer flex justify-between items-center p-4 bg-white hover:bg-gray-100 transition-colors rounded-xl"
        >
          <div>
            <h3 className="text-lg font-semibold">{year}</h3>
            <p className="text-gray-600">{section}</p>
          </div>
          <div className="flex items-center space-x-2">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                status === 'In progress'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {status}
            </span>
            <IoIosArrowForward
              className={`transition-transform ${
                isOpen ? 'transform rotate-90' : ''
              }`}
            />
          </div>
        </div>
        {isOpen && (
          <div className="p-4 bg-gray-50 rounded-lg">
            {subjects.length > 0 && (
              <div>
                <h4 className="text-md font-bold">Core Subjects</h4>
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <p>{subject.name}</p>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        subject.status === 'Completed'
                          ? 'bg-blue-100 text-blue-600'
                          : subject.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {subject.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
  
            {electives.length > 0 && (
              <div className="mt-4">
                <h4 className="text-md font-bold">Elective Subjects</h4>
                {electives.map((elective, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <p>{elective.name}</p>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                      {elective.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  EnrollmentDropdownItem.propTypes = {
    year: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(PropTypes.object),
    electives: PropTypes.arrayOf(PropTypes.object),
  }