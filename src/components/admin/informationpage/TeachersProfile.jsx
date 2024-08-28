import ProfileTab from '../../teacher/administration/ProfileTab'
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TeachersProfile = () => {

     const handleBackClick = () => {
          navigate(-1); // This will navigate back to the previous route
        };

     return (
          <>
          <div className=" relative  ">
          {/* header */}
          <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
  <div
    className="text-white text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2"
  >
    <div onClick={handleBackClick} className="flex items-center cursor-pointer">
      <AiOutlineArrowLeft />
      <p className="text-sm">Back</p>
    </div>
         
     </div>
     </div>
      {/* Overlapping White Box */}
      <div className="relative -top-6 px-6">
          <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4 mb-4" style={{ color: '#54585C' }}></div>
          <ProfileTab />
          </div>
     </div>
            </>
  );
};

export default TeachersProfile;