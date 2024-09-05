import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import PropTypes from "prop-types"


const VideoForm = ({ onClose }) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold">Add Video</h3>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Content Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Chapter 1: Calculus"
        />
        <label className="block text-sm font-medium mb-2">Embed Code</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md mb-4"
          placeholder="www.youtube.com"
        />
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">Activity Tracking:</p>
          <label className="flex items-center space-x-2 mb-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Display Time Spent</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Display Completion Status</span>
          </label>
        </div>
      </div>
      <div className="flex items-center w-full space-x-4 mt-4">
        <button className="flex items-center w-full space-x-2 justify-center px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600">
          <span><FaCircleCheck /> </span> <span>Save</span>
        </button>
        <button
          onClick={onClose}
          className="flex items-center justify-center space-x-4 w-full px-4 py-2 text-gray-500 bg-gray-200 rounded-md shadow hover:bg-gray-300"
        >
          <span><MdOutlineCancel /></span> <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};
VideoForm.propTypes={
    onClose: PropTypes.func.isRequired,
  
}

export default VideoForm;
