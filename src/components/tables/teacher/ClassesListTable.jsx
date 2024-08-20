import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "../../reusables/table/Table";
import Pagination from "../../reusables/filters/Pagination"; // Ensure this import is correct

export default function ClassesListTable({ data, selectedRows, onRowSelection }) {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [allSelected, setAllSelected] = useState(false); // Track select all status

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle individual row selection
  const handleRowCheck = (id) => {
    let newSelectedRows = [];
    if (selectedRows.includes(id)) {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    } else {
      newSelectedRows = [...selectedRows, id];
    }
    onRowSelection(newSelectedRows);
    setAllSelected(newSelectedRows.length === filteredData.length);
  };

  // Handle select all rows on the current page
  const handleSelectAll = () => {
    if (allSelected) {
      onRowSelection([]);
      setAllSelected(false);
    } else {
      const currentIds = filteredData.map(item => item.id);
      onRowSelection(currentIds);
      setAllSelected(true);
    }
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(data?.slice(start, end));
  }, [currentPage, data]);

  const student_column = [
    {
      title: (
        <input
          type="checkbox"
          checked={allSelected}
          onChange={handleSelectAll}
        />
      ),
      key: "check",
      render: (data) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(data.id)}
          onChange={() => handleRowCheck(data.id)}
        />
      ),
    },
    {
      title: "Class",
      key: "class",
      render: (data) => (
        <p className="flex gap-x-2">
          <span className="bg-[#E6F2FF] rounded-full">{"c-3"} </span>  {data.class}
        </p>
      ),
    },
    {
      title: "Section",
      key: "section",
      render: (data) => <span className="min-w-[5rem]">{data.section}</span>,
    },
    {
      title: "No of Students",
      key: "noOfStudents",
      render: (data) => (
        <span className="min-w-[5rem] flex items-center gap-x-2">
          {data.noOfStudents ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "Subjects",
      key: "subjects",
      render: (data) => (
        <div className="flex flex-wrap gap-2">
          {data.subjects.map((subject, index) => (
            <span key={index} className="bg-gray-200 font-[400] rounded-full px-2 py-1 text-xs">
              {subject}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Male",
      key: "male",
      render: (data) => <span>{data.male ?? "Not Available"}</span>,
    },
    {
      title: "Female",
      key: "female",
      render: (data) => <span>{data.female ?? "Not Available"}</span>,
    },
    {
      title: "",
      key: "actions",
      render: (data) => (
        <div className="flex items-center gap-x-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src="/info-circle.svg"
            alt="info"
            onClick={() => navigate(`/teacher/information-system/${data.id}`)}
          />
        </div>
      ),
    },
  ];

  const subjectsArray = [
    { code: "MTH", name: "Mathematics" },
    { code: "ENG", name: "English" },
    { code: "BIO", name: "Biology" },
    { code: "CHM", name: "Chemistry" },
    { code: "PHY", name: "Physics" },
    { code: "LAB", name: "Laboratory" },
  ];
  
  return (
    <div className="rounded border p-4 rounded-xl text-[#8E959C]">
 <div className="flex gap-2 justify-around py-2 flex-wrap">
      {subjectsArray.map((subject, index) => (
        <span key={index} className="bg-gray-200 rounded-full px-4 py-2 text-xs font-[400]">
          {subject.code} - {subject.name}
        </span>
      ))}
    </div>
      <Table columns={student_column ?? []} data={filteredData ?? []} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data?.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

ClassesListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelection: PropTypes.func.isRequired,
};
