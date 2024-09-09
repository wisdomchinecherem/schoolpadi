import { useState } from "react";
import FilterSearchBar from "../../reusables/student/FilterSearchBar";
import { NoticeData } from "../placeholder";
import Pagination from "../../reusables/student/Pagination"; // Adjust the path as needed

const Notice = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5; // Number of notices per page

  // Function to handle search input changes
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to the first page on search
  };

  // Function to handle filter option changes
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Filter the data based on search term and filter
  const filteredNotices = NoticeData.filter((notice) =>
    notice.title?.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((notice) => filter === "" || notice.from?.includes(filter));

  // Calculate the paginated notices for the current page
  const indexOfLastNotice = currentPage * itemsPerPage;
  const indexOfFirstNotice = indexOfLastNotice - itemsPerPage;
  const currentNotices = filteredNotices.slice(
    indexOfFirstNotice,
    indexOfLastNotice
  );

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="max-w-[466px] mt-1">
        <FilterSearchBar
          placeholder={"Search notices..."}
          onSearch={handleSearch}
          filterOptions={[
            { label: "All", value: "" },
            { label: "Admins", value: "Admins" },
          ]}
          onFilterChange={handleFilterChange}
        />
      </div>
      <div className="border border-grayout p-4 mt-4 rounded-xl">
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
            <span className="text-sm font-semibold">Title</span>
            <span className="text-sm font-semibold">Description</span>
            <span className="text-sm font-semibold">Date</span>
            <span className="text-sm font-semibold">From</span>
          </div>
          <div>
            {currentNotices.map((notice) => (
              <div
                key={notice.id}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <span className="text-sm text-gray-800">{notice.title}</span>
                <span className="text-sm text-gray-600 max-w-[310px] truncate">
                  {notice.content}
                </span>
                <span className="text-sm text-gray-600">{notice.date}</span>
                <span className="text-sm text-blue-500">{notice.sender}</span>
              </div>
            ))}
            {currentNotices.length === 0 && (
              <div className="p-4 text-center text-gray-600">
                No notices found.
              </div>
            )}
          </div>
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredNotices.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Notice;
