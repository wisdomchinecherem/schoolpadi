import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const DropdownFilter = ({
  name = "Academic Session",
  options = [],
  placeholder = "select option",
  onSelect = null,
  className = "",
  searchPlaceholder = "search",
  dropdownIcon,
  searchIcon,
  debounceTime = 300,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Toggle dropdown visibility
  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  // Handle search input
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Debounce the search input to reduce unnecessary filtering
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [search, debounceTime]);

  // Filter options based on debounced search input
  const filteredOptions = options.filter((option) =>
    option.session.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className={`relative w-[250px] ${className}`}>
      <div>
        <p className="text-[#54585C] text-sm">{name}</p>
        <div className="flex flex-col mt-2">
          <div
            onClick={handleDropdown}
            className="flex items-center justify-between border border-grayout rounded-md cursor-pointer py-[18px] px-4 gap-4"
          >
            <p className="text-sm text-[#D3DBE3] font-normal">{placeholder}</p>
            <div>
              <img src={dropdownIcon} alt="click" />
            </div>
          </div>
          {/* dropdown */}
          <div
            className={`absolute z-10 w-full shadow-lg top-full mt-2 flex-col border border-grayout rounded-md bg-white ${
              dropdown ? "flex" : "hidden"
            }`}
          >
            <div className="border-b border-grayout py-2 px-4">
              <div className="flex items-center py-2 px-[12px] border border-grayout rounded-md">
                <img src={searchIcon} className="mr-2" alt="search" />
                <input
                  type="text"
                  className="flex-1 outline-none indent-1 border-none text-sm text-[#D3DBE3] placeholder:text-[#D3DBE3]"
                  placeholder={searchPlaceholder}
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="py-2 px-4 max-h-[188px] overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 py-1 cursor-pointer"
                    onClick={() => onSelect && onSelect(option)}
                  >
                    <input
                      type="radio"
                      name="select"
                      id={`select-${index}`}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`select-${index}`}
                      className="text-sm font-normal text-schoolpadi-grey-primary"
                    >
                      {option.session}
                    </label>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No options found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DropdownFilter.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      session: PropTypes.string.isRequired,
    })
  ),
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  dropdownIcon: PropTypes.string.isRequired,
  searchIcon: PropTypes.string.isRequired,
  debounceTime: PropTypes.number,
};

export default DropdownFilter;
