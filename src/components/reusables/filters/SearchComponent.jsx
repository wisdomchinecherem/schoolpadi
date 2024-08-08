import PropTypes from 'prop-types';
// import { FaSearch } from 'react-icons/fa';

const SearchComponent = ({ value, onChange, placeholder = "Search" }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-100 outline-none flex-grow"
      />
      {/* <FaSearch className="text-gray-400" /> */}
    </div>
  );
};

SearchComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};



export default SearchComponent;
