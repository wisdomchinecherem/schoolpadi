import { Link } from "react-router-dom";
import { learningManagementData } from "../../components/StudentDashboard/placeholder";
import SubjectSummaryCard from "../../components/StudentDashboard/learningManagement/SubjectSummaryCard";

const LearningManagementSystem = () => {
  return (
    <>
      <div className="text-2xl font-medium mt-[3rem] text-white">
        Learning Management System
      </div>
      <div className="p-4 bg-white rounded border my-[39px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {learningManagementData.map((data, index) => (
            <Link
              key={index}
              to={`/StudentDashboard/learning/subjects/${encodeURIComponent(
                data.subject.name
              )}`}
            >
              <SubjectSummaryCard subject={data.subject} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LearningManagementSystem;
