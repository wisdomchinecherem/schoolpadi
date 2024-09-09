import { useParams } from "react-router-dom";
import { learningManagementData } from "../placeholder";
import SubjectCard from "./SubjectCard";

const SubjectDetailPage = () => {
  const { subjectName } = useParams();
  console.log("Subject Name from URL:", subjectName);

  const decodedSubjectName = decodeURIComponent(subjectName);
  const subjectData = learningManagementData.find(
    (data) => data.subject.name === decodedSubjectName
  );
  console.log("Subject Data:", subjectData);

  if (!subjectData) {
    return <p>Subject not found</p>;
  }

  return <SubjectCard subject={subjectData.subject} />;
};

export default SubjectDetailPage;
