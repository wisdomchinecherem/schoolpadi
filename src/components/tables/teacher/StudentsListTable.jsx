import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "../../reusables/table/Table";
import { Pagination } from "../../reusables/filters";

export default function StudentsListTable({ data }) {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(data?.slice(start, end));
  }, [currentPage, data]);

  const student_column = [
    {
      title: "",
      key: "check",
      render: () => (
        <p className="flex  gap-x-4 gap-2">
          {" "}
          <input type="checkbox" />
        </p>
      ),
    },
    {
      title: "Student",
      key: "student",
      render: (data) => (
        <p className="flex  gap-x-4 gap-2">
          <img className="" src="/person.svg" /> {data.student}
        </p>
      ),
    },
    {
      title: "Section",
      key: "section",
      render: (data) => <span className="min-w-[5rem]">{data.section}</span>,
    },
    {
      title: "Class ",
      key: "class",
      render: (data) => (
        <span className="min-w-[5rem] flex items-center gap-x-2">
          {data.class ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "ID",
      key: "id",
      render: (data) => <span>{data.id ?? "Not Available"}</span>,
    },
    {
      title: "Email",
      key: "email",
      render: (data) => <span>{data.email ?? "Not Available"}</span>,
    },
    {
      title: "Contact ",
      key: "contact",
      render: (data) => <span>{data.contact ?? "Not Available"}</span>,
    },

    {
      title: "",
      key: "actions ",
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

  return (
    <div className="rounded border text-[#8E959C]">
      <Table columns={student_column ?? []} data={filteredData ?? []} />
      <Pagination
        currentPage={currentPage}
        totalItems={data?.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />{" "}
    </div>
  );
}

StudentsListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
