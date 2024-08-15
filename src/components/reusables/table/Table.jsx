import PropTypes from 'prop-types';
// import { DottedLoader } from '../loader';

const Table = ({ columns, data, onRowClick, isCoin, isLoading }) => {
  const colHeaders = columns?.map(({ title, key }) => (
    <th key={key} className="text-white uppercase border-b bg-[#FAFBFC] dark:border-black  border-t">
      <p className="text-[#8E959C] dark:text-white py-4 px-2 text-sm text-left font-[700] w-full">
        {title}
      </p>
    </th>
  ));

  const tableData = data && data.map((rowData, i) => (
    <tr
      onClick={() => onRowClick && onRowClick(rowData)}
      key={`row-${i}`}
      className={`text-left  text-md border-b dark:border-black cursor-pointer  ${isCoin && i % 2 === 0 ? 'bg-gray-200  dark:bg-[#333333]/30' : ''}`}
    >
      {columns.map(({ render, key }, id) => (
        <td key={`data-${i}-${id}`} className="py-4 px-2 border-gray-200">
          {render ? render(rowData, i) : rowData[key]}
        </td>
      ))}
    </tr>
  ));

  const emptyStateRow = (
    <tr>
      <td colSpan={columns.length} className="py-4 px-6 text-center text-gray-500">
        No data available
      </td>
    </tr>
  );

  const loadingStateRow = (
    <tr>
      <td colSpan={columns.length} className="py-8 px-6 text-center">
        {/* <DottedLoader /> */}
        Loading ...
      </td>
    </tr>
  );

  return (
    <div className="overflow-x-auto rounder-xl border">
      <table className="min-w-full w-full rounder-xl border-collapse">
        <thead>
          <tr className="border-gray-700">{colHeaders}</tr>
        </thead>
        <tbody>
          {isLoading ? (
            loadingStateRow
          ) : data && data.length ? (
            tableData
          ) : (
            emptyStateRow
          )}
        </tbody>
      </table>
    </div>
  );
};


Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRowClick: PropTypes.func,
  isLoading: PropTypes.bool,
  isCoin: PropTypes.bool,
};

export default Table;
