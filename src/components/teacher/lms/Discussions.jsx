import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import RecentActivities from './RecentActivities';

export default function  Discussions  ()  {
  const [shareWith, setShareWith] = useState({
    teachers: false,
    students: false,
  });
  const [studentOption, setStudentOption] = useState('all');
  const [sendEmail, setSendEmail] = useState(false);

  const handleCheckboxChange = (e) => {
    setShareWith({
      ...shareWith,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRadioChange = (e) => {
    setStudentOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log('Form submitted');
  };

  return (
    <div className="mx-auto p-4 bg-white border rounded-lg ">
        <div className="flex my-4 justify-end w-full">

          <div className="bg-white flex items-center justify-center h-6 w-6 rounded-md border-gray-600">
            <BsThreeDots className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      <textarea
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Share what you've been up to..."
        rows="4"
      />

      <div className="mb-4 flex items-start  gap-8">
        <p>Share with:</p>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="teachers"
            checked={shareWith.teachers}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span>Teachers</span>
        </label>
        <div className="">

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="students"
            checked={shareWith.students}
            onChange={handleCheckboxChange}
            className="form-checkbox"
          />
          <span>Students</span>
        </label>
        <div className="flex items-center space-x-4 mt-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="studentOption"
              value="all"
              checked={studentOption === 'all'}
              onChange={handleRadioChange}
              className="form-radio"
            />
            <span>All Students</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="studentOption"
              value="selected"
              checked={studentOption === 'selected'}
              onChange={handleRadioChange}
              className="form-radio"
            />
            <span>Selected Students</span>
          </label>
        </div>
        </div>
      </div>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={sendEmail}
            onChange={(e) => setSendEmail(e.target.checked)}
            className="form-checkbox"
          />
          <span>Send Email Notifications</span>
        </label>
        {/* <button className="flex items-center w-full space-x-2 justify-center px-4 py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600">
          <span><FaCircleCheck /> </span> <span>Save</span>
        </button> */}
      <div className="flex items-center space-x-4 w-full">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center px-4 w-full py-2 text-white bg-blue-500 rounded-md shadow hover:bg-blue-600"
        >
          <span>✔</span> Share
        </button>
        <button className="flex items-center w-full justify-center px-4 py-2 text-gray-500 bg-gray-200 rounded-md shadow hover:bg-gray-300">
          <span>✖</span> Cancel
        </button>
      </div>

      <RecentActivities />
    </div>
  );
}