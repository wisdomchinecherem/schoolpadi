// ContentTypeGrid.js
import { FaPlayCircle,  FaFileDownload, FaImage } from "react-icons/fa";
import { MdOutlineTextSnippet, MdQuiz, MdHeadset } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import Monitor from "../../reusables/icons/Monitor";
import DocumentIcon from "../../reusables/icons/DocumentIcon";
import PropTypes from "prop-types"

const ContentTypeGrid = ({ onContentTypeClick }) => {
  const contentTypes = [
    { icon: <FaPlayCircle />, label: "Video" },
    { icon: <MdHeadset />, label: "Audio" },
    { icon: <DocumentIcon />, label: "Document" },
    { icon: <Monitor />, label: "Presentation" },
    { icon: <FaImage />, label: "Image" },
    { icon: <MdOutlineTextSnippet />, label: "Text" },
    { icon: <BiBookContent />, label: "Scorm" },
    { icon: <BiBookContent />, label: "LTI" },
    { icon: <FaFileDownload />, label: "Downloadable Document" },
    { icon: <MdQuiz />, label: "Quiz" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {contentTypes.map((content, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer"
          onClick={() => onContentTypeClick(content.label)}
        >
          <div className="text-2xl mb-2">{content.icon}</div>
          <div className="text-sm font-medium">{content.label}</div>
        </div>
      ))}
    </div>
  );
};
ContentTypeGrid.propTypes={
    onContentTypeClick: PropTypes.func.isRequired,
  
}
export default ContentTypeGrid;
