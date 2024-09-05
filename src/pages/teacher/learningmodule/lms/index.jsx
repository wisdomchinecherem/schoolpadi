// import React from 'react'

import { useState } from "react";
import Dropdown from "../../../../components/teacher/studentdetail/attendance/DropDown";
import SubjectCard from "../../../../components/teacher/lms/StudentCard";



const session = [
    { value: "sectionA", label: "SY 2025" },
    { value: "sectionB", label: "SY 2024" },
    { value: "sectionC", label: "SY 2023" },
    { value: "sectionD", label: "SY 2022" },
    { value: "sectionF", label: "SY 2021" },
  ];

  const classes = [
    { value: "sectionA", label: "Section A" },
    { value: "sectionB", label: "Section B" },
    { value: "sectionC", label: "Section C" },
    { value: "nursery1", label: "Nursery 1", group: "Kindergarten" },
    { value: "nursery2", label: "Nursery 2", group: "Kindergarten" },
    { value: "class1", label: "Class 1", group: "Primary" },
    { value: "class2", label: "Class 2", group: "Primary" },
    { value: "class3", label: "Class 3", group: "Primary" },
    { value: "class4", label: "Class 4", group: "Primary" },
    { value: "class5", label: "Class 5", group: "Primary" },
  ];

export default function LearningManagementSystem() {
    const [selectedSession, setSelectedSession] = useState("");
    const [selectedClass, setSelectedClass] = useState("");
    const cards = Array(6).fill({
      title: 'Mathematics',
      section: 'SECTION A - Class 3',
      label: 'Core',
    });
  return (
    <section>

<div className="flex xl:flex-nowrap flex-wrap items-center gap-4">
          {/* Section Dropdown */}
          <Dropdown
            label="Section"
            placeholder="Select section"
            searchPlaceholder="Search section..."
            options={session}
            onSelect={selectedSession}
          />

          {/* Class Dropdown */}
          <Dropdown
            label="Class"
            placeholder="Select class"
            searchPlaceholder="Search class..."
            options={classes}
            onSelect={setSelectedClass}
          />

      
        </div>

        <div className="grid gap-6 grid-cols-4 justify-center items-center  p-4">
        {cards.map((card, index) => (
        <SubjectCard
          key={index}
          title={card.title}
          section={card.section}
          label={card.label}
        />
      ))}
      </div>
    </section>
  )
}
