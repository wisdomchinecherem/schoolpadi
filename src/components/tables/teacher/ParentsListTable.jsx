// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "../../reusables/table/Table";
import Pagination from "../../reusables/filters/Pagination"; // Ensure this import is correct
import { IoMail } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";

export default function ParentsListTable({ data, selectedRows, onRowSelection }) {
//   const navigate = useNavigate();
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

  const parents_column = [
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
      title: "Parents",
      key: "parents",
      render: (data) => (
        <p className="flex gap-x-2">
          <span className="bg-[#E6F2FF] rounded-full">{"c-3"} </span>  {data.parents}
        </p>
      ),
    },
    {
      title: "Parents Email",
      key: "email",
      render: (data) => <span className="min-w-[5rem]">{data.email}</span>,
    },
    {
      title: "Parents Contact",
      key: "contact",
      render: (data) => (
        <span className="min-w-[5rem] flex items-center gap-x-2">
          {data.contact ?? "Not Available"}
        </span>
      ),
    },
       {
      title: "Status",
      key: "status",
      render: (data) => <span>{data.status ?? "Not Available"}</span>,
    },
    {
      title: "Invited",
      key: "invited",
      render: (data) => <span>{data.invited ?? "Not Available"}</span>,
    },
    {
      title: "Parents",
      key: "parents",
      render: (data) => <span>{data.parents ?? "Not Available"}</span>,
    },
    {
      title: "",
      key: "actions",
      render: () => (
        <div className="flex items-center text-xl gap-x-4">
         {/* <IolosM */}
         <IoMail />
          <IoIosChatbubbles />

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
      <Table columns={parents_column ?? []} data={filteredData ?? []} case={"sentence"} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data?.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

ParentsListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelection: PropTypes.func.isRequired,
};
