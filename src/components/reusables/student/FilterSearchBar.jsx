import PropTypes from "prop-types";
import { SearchIcon } from "@heroicons/react/outline";

const FilterSearchBar = ({
  placeholder,
  onSearch,
  filterOptions,
  onFilterChange,
}) => {
  return (
    <div className="flex items-center space-x-2 mb-1 rounded-md">
      <div className="border border-gray-300 rounded-md p-2 w-full flex items-center gap-2">
        <SearchIcon height={16} color="#8E959C" width={16} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 outline-none border-none text-sm text-[#D3DBE3] placeholder:text-[#D3DBE3] placeholder:text-sm"
        />
      </div>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="border border-gray-300 text-[#8E959C] text-[12px] rounded-md px-3 py-2"
      >
        {filterOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

FilterSearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSearchBar;
