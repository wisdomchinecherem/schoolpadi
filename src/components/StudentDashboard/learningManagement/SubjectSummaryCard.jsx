import PropTypes from "prop-types";

const SubjectSummaryCard = ({ subject }) => {
  return (
    <div className="cursor-pointer bg-white border max-w-[311px] rounded-lg shadow-sm">
      <div className="p-4">
        <div className="flex w-full justify-end">
          <span className="px-2 bg-[#E6F2FF] text-[#3599FF] text-center rounded-xl text-[12px] font-medium">
            {subject.category}
          </span>
        </div>

        <div className="flex flex-col mt-10 justify-center items-center">
          <h2 className="text-lg font-medium">{subject.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{subject.section}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 border-t p-4 text-gray-500">
        <i className="fas fa-book"></i>
        <i className="fas fa-user-graduate"></i>
        <i className="fas fa-comments"></i>
        <i className="fas fa-question-circle"></i>
        <i className="fas fa-tasks"></i>
      </div>
    </div>
  );
};

SubjectSummaryCard.propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubjectSummaryCard;
