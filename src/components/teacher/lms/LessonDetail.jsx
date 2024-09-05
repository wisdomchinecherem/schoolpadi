import { useState } from "react";
import { IoMdMove } from "react-icons/io";
import EditIcon from "../../reusables/icons/EditIcon";
import TrashIcon from "../../reusables/icons/TrashIcon";
import VideoForm from "./VideoForms";
import ContentTypeGrid from "./ContentTypeGrid";
import DocumentIcon from "../../reusables/icons/DocumentIcon";
import Monitor from "../../reusables/icons/Monitor";
import PropTypes from "prop-types"

const LessonDetail = ({ lesson }) => {
  const [selectedContentType, setSelectedContentType] = useState(null);

  const handleContentTypeClick = (type) => {
    setSelectedContentType(type);
  };

  return (
    <div className="p-4 bg-white border rounded-lg shadow-md mt-4">
      <h3 className="text-lg ">{lesson.title}</h3>
      <p className="text-gray-500">Learn simple calculus</p>
      <div className="mt-4">
        <div className="flex justify-between items-center">

        <p className="mb-2 items-center flex gap-4"> <DocumentIcon /> Document</p>
        <div className="flex text-[#55A9FF] items-center gap-5 mb-2">
          <IoMdMove className="cursor-move" />
          <EditIcon color="#55A9FF" />
          <TrashIcon color="#55A9FF"/>
        </div>
        </div>
        <div className="flex  items-center justify-between">
        <p className=" mb-2 flex items-center gap-4"> <Monitor size="16" />  Presentation</p>
        <div className="flex text-[#55A9FF] items-center gap-5 mb-2">
          <IoMdMove className="cursor-move" />
          <EditIcon color="#55A9FF" />
          <TrashIcon color="#55A9FF"/>
        </div>

        </div>
      </div>

      {/* Conditionally render selected content type or grid */}
      {selectedContentType === "Video" ? (
        <VideoForm onClose={() => setSelectedContentType(null)} />
      ) : (
        <ContentTypeGrid onContentTypeClick={handleContentTypeClick} />
      )}
    </div>
  );
};
LessonDetail.propTypes={
    lesson: PropTypes.object.isRequired, // Prop type for lesson object
}
export default LessonDetail;
