import  { useState } from "react";
import PropTypes from "prop-types"
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaCopy } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdMove } from "react-icons/io";
import { FiList } from "react-icons/fi";
import ToggleSwitch from "./ToggleSwitch";
import EditIcon from "../../reusables/icons/EditIcon";
import TrashIcon from "../../reusables/icons/TrashIcon";
import LessonDetail from "./LessonDetail";

const LessonManager = () => {
  const [activityTracking, setActivityTracking] = useState(true);
  const [lessons, setLessons] = useState([
    { id: "1", title: "Lesson 1: Simple Calculus", isLive: true, isOpen: false },
    { id: "2", title: "Lesson 2: Trig Calculus", isLive: false, isOpen: false },
  ]);

  const handleToggleTracking = () => {
    setActivityTracking(!activityTracking);
  };

  const handleToggleLive = (index) => {
    setLessons(
      lessons.map((lesson, i) =>
        i === index ? { ...lesson, isLive: !lesson.isLive } : lesson
      )
    );
  };

  const handleToggleOpen = (index) => {
    setLessons(
      lessons.map((lesson, i) =>
        i === index ? { ...lesson, isOpen: !lesson.isOpen } : { ...lesson, isOpen: false }
      )
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = lessons.findIndex((lesson) => lesson.id === active.id);
      const newIndex = lessons.findIndex((lesson) => lesson.id === over.id);

      setLessons((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="p-4 bg-[#F8FAFC] rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Flip Class</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm">Activity Tracking</span>
          <ToggleSwitch
            isChecked={activityTracking}
            onChange={handleToggleTracking}
          />
          <FaCopy />
          <div className="bg-white flex items-center justify-center h-6 w-6 rounded-md border-gray-400">
            <BsThreeDots className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Lesson Overview Section */}
      <div className="bg-white p-2">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Lesson 1: Chapter 1: Calculus</h3>
          <p className="text-gray-500">Calculus</p>
        </div>

        {/* Drag and Drop Context using DndKit */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={lessons} strategy={verticalListSortingStrategy}>
            {lessons.map((lesson, index) => (
              <SortableItem
                key={lesson.id}
                lesson={lesson}
                index={index}
                handleToggleOpen={handleToggleOpen}
                handleToggleLive={handleToggleLive}
              />
            ))}
          </SortableContext>
        </DndContext>

        {/* Add New Lesson Button */}
        <div className="mt-4 flex flex-col items-start space-y-2 text-blue-500 cursor-pointer">
          <span>+ Add New Lesson</span>
          <span>+ Add New Lesson</span>
        </div>
      </div>
    </div>
  );
};

const SortableItem = ({ lesson, index, handleToggleOpen, handleToggleLive }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: lesson.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  SortableItem.propTypes={
    lesson: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isLive: PropTypes.bool.isRequired,
      isOpen: PropTypes.bool.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    handleToggleOpen: PropTypes.func.isRequired,
    handleToggleLive: PropTypes.func.isRequired,
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-b cursor-pointer"
    >
      <div className="flex items-center justify-between py-2" >
        <div>
          <span className="text-sm">{lesson.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span
              className={`ml-2 text-xs font-bold ${
                lesson.isLive ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {lesson.isLive ? "Live" : "Draft"}
            </span>
            <ToggleSwitch
              isChecked={lesson.isLive}
              onChange={() => handleToggleLive(index)}
            />
          </div>
          {/* Apply drag attributes and listeners only to the drag handle */}
          <div {...attributes} {...listeners} className="cursor-grab">
            <IoMdMove />
          </div>
          <div className=""onClick={() => handleToggleOpen(index)}>

          <EditIcon />
          </div>
          <FiList />
          <TrashIcon />
        </div>
      </div>
      {/* Display Lesson Detail as an Accordion */}
      {lesson.isOpen && <LessonDetail lesson={lesson} />}
    </div>
  );
};

export default LessonManager;
