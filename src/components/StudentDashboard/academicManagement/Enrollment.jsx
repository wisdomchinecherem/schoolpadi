import { useState } from "react";
import { EnrollmentData } from "../placeholder";
import closeEnrollment from "../images/close-enrollment.png";
import expandEnrollment from "../images/expandenrollment.svg";

const Enrollment = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border p-4 mt-[3rem] border-grayout rounded-md">
      <div className="max-w-[561px] w-full">
        {EnrollmentData.map((enrollment, index) => (
          <div key={index} className="mb-6">
            {/* Enrollment Header */}
            <div
              onClick={() => toggleExpand(index)}
              className="flex items-center justify-between bg-[#FAFBFC] p-4 rounded-small gap-4 mb-3 cursor-pointer"
            >
              <div>
                <p className="text-xs text-schoolpadi-grey-primary">
                  {enrollment.academicSession}
                </p>
                <p className="text-sm font-medium text-schoolpadi-grey-primary">
                  {enrollment.section} - {enrollment.class}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="py-[5px] px-[10px] text-[#3599FF] text-[12px] font-medium rounded-[6px] bg-schoolpadi-blue-lighter">
                  {enrollment.status}
                </div>
                <div>
                  {expandedIndex === index ? (
                    <img src={closeEnrollment} alt="close" />
                  ) : (
                    <img src={expandEnrollment} alt="expand" />
                  )}
                </div>
              </div>
            </div>
            {/* Expanded Detail */}
            <div
              className={`border border-grayout rounded-md p-4 bg-white ${
                expandedIndex === index ? "block" : "hidden"
              }`}
            >
              {enrollment.subjects.map((subject, index) => (
                <div key={index} className="mb-4">
                  <p className="text-xs text-schoolpadi-grey-primary font-medium mb-2">
                    {subject.category}
                  </p>
                  {subject.subjectsList.map((subjectList, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 px-2 border-b first:border-t border-grayout"
                    >
                      <p className="text-sm text-schoolpadi-grey-primary">
                        {subjectList.name}
                      </p>
                      <div
                        className={`py-[5px] px-[10px] text-[12px] font-medium rounded-[6px] 
                        ${
                          subjectList.status === "Completed"
                            ? "text-[#27AE60] bg-[#E8F5E9]"
                            : ""
                        }
                        ${
                          subjectList.status === "In Progress"
                            ? "text-[#3599FF] bg-[#E3F2FD]"
                            : ""
                        }
                        ${
                          subjectList.status === "Pending"
                            ? "text-[#FFC107] bg-[#FFF3CD]"
                            : ""
                        }
                      `}
                      >
                        {subjectList.status}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enrollment;
