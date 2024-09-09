import PropTypes from "prop-types";
import Tabs from "./Tab";


const SubjectCard = ({ subject }) => {
  return (
    <div className="border border-grayout bg-white mt-4 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">{subject.name}</h2>
        <span className="px-2 bg-[#E6F2FF] text-[#3599FF] rounded-xl text-[12px] font-medium">
          {subject.category}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-1">{subject.section}</p>
      {subject.details.flipClass.map((flipClass, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-md font-semibold">{flipClass.chapter}</h3>
          {flipClass.lessons.map((lesson, i) => (
            <div key={i} className="mt-2">
              <h4 className="text-sm font-medium">
                Lesson {lesson.lessonNumber}: {lesson.lessonTitle}
              </h4>
              <p className="text-sm text-gray-500">{lesson.description}</p>
              <div className="mt-2">
                {lesson.resources.map((resource, j) => (
                  <a
                    key={j}
                    href={resource.link}
                    className="text-sm text-blue-500 mr-2"
                  >
                    {resource.type}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className="mt-4 border-t pt-4">
        <Tabs tabs={subject.details.tabs} />
      </div>
    </div>
  );
};

SubjectCard.propTypes = {
  subject: PropTypes.shape({
    name: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    details: PropTypes.shape({
      flipClass: PropTypes.arrayOf(
        PropTypes.shape({
          chapter: PropTypes.string.isRequired,
          lessons: PropTypes.arrayOf(
            PropTypes.shape({
              lessonNumber: PropTypes.number.isRequired,
              lessonTitle: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              resources: PropTypes.arrayOf(
                PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  link: PropTypes.string.isRequired,
                })
              ).isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
      tabs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          inputPlaceholder: PropTypes.string,
          shareWithOptions: PropTypes.arrayOf(PropTypes.string),
          buttons: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              action: PropTypes.string.isRequired,
            })
          ),
          content: PropTypes.string,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default SubjectCard;
