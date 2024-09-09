import { useState } from "react";
import FilterSearchBar from "../../components/reusables/student/FilterSearchBar";
import Table from "../../components/reusables/student/Table";
import Pagination from "../../components/reusables/student/Pagination";
import pluswhite from "../../components/StudentDashboard/images/pluswhite.svg";
import downloadDocument from "../../components/StudentDashboard/images/document-download.png";
import PayFees from "./PayFees";
import { Link, Outlet } from "react-router-dom";

const Finance = () => {
  const [showPayFees, setShowPayFees] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; // Number of rows to display per page

  const columns = [
    { header: "Invoice ID", accessor: "invoiceId" },
    { header: "Title", accessor: "title" },
    { header: "Amount", accessor: "amount" },
    { header: "Discount", accessor: "discount" },
    { header: "Amount Paid", accessor: "amountPaid" },
    { header: "Status", accessor: "status" },
    { header: "Invoice Date", accessor: "invoiceDate" },
    { header: "Due Date", accessor: "dueDate" },
  ];

  const data = [
    {
      invoiceId: "1",
      title: "Academic Fee",
      amount: "12,000.00",
      discount: "0.00",
      amountPaid: "12,000.00",
      status: "Paid",
      invoiceDate: "28-05-2024",
      dueDate: "28-05-2027",
    },
    {
      invoiceId: "2",
      title: "Registration Fee",
      amount: "1,000.00",
      discount: "0.00",
      amountPaid: "1,000.00",
      status: "Paid",
      invoiceDate: "28-05-2024",
      dueDate: "28-05-2027",
    },
    {
      invoiceId: "3",
      title: "Library Fee",
      amount: "500.00",
      discount: "0.00",
      amountPaid: "500.00",
      status: "Paid",
      invoiceDate: "29-05-2024",
      dueDate: "29-05-2027",
    },
    {
      invoiceId: "4",
      title: "Lab Fee",
      amount: "800.00",
      discount: "0.00",
      amountPaid: "800.00",
      status: "Unpaid",
      invoiceDate: "30-05-2024",
      dueDate: "30-05-2027",
    },
    {
      invoiceId: "5",
      title: "Sports Fee",
      amount: "300.00",
      discount: "0.00",
      amountPaid: "300.00",
      status: "Paid",
      invoiceDate: "31-05-2024",
      dueDate: "31-05-2027",
    },
  ];

  // Filter and paginate the data
  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => item.status.includes(filter));

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  // const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const handle payment component

  // const handleRoutePayment = () => setShowPayFees((prev) => !prev);

  return (
    <>
      <div className="mt-[39px]">
        <div className="flex items-center justify-between gap-4">
          <span className="text-white font-medium text-2xl">
            Fees & Invoicing
          </span>

          {/* route to payfees */}

          <Link to={"StudentDashboard/finance/payfees"}>
            <div
              // onClick={handleRoutePayment}
              className="bg-[#027FFF] cursor-pointer py-2 px-3 rounded-lg flex items-center justify-center"
            >
              <img src={pluswhite} />
              <span className="ml-[10px] text-sm text-white font-medium">
                Pay Fees
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-[18px] bg-white border border-grayout rounded-md p-4">
          <div className="flex justify-between items-center">
            <FilterSearchBar
              placeholder="Placeholder"
              onSearch={setSearchTerm}
              filterOptions={[
                { label: "Paid", value: "Paid" },
                { label: "Unpaid", value: "Unpaid" },
              ]}
              onFilterChange={setFilter}
            />
            <div className="flex space-x-2">
              <div className="flex items-center justify-center rounded-full bg-[#E6F2FF] cursor-pointer p-[6px]">
                <img src={downloadDocument} />
              </div>
              <span className="p-2 bg-[#E7F6EC] text-green-400 text-sm font-medium rounded-md">
                Paid Amount: 13,000.00
              </span>
              <span className="p-2 bg-[#FBEAE9] text-[#D42620] text-sm font-medium rounded-md">
                Paid Amount: 13,000.00
              </span>
            </div>
          </div>
          <div className="border border-grayout rounded-lg p-4">
            <Table columns={columns} data={paginatedData} />
            <Pagination
              totalItems={filteredData.length}
              itemsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Finance;
