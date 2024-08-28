import ProfileTab from '../../teacher/administration/ProfileTab'
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TeachersProfile = () => {

     const navigate = useNavigate();

     const handleBackClick = () => {
          navigate(-1); // This will navigate back to the previous route
        };

     return (
          <>
     <div className=" relative  ">
     <div className="bg-[#014F9E] p-1 flex justify-between items-center px-4 sm:p-2 sm:px-6">
     <div
    className="text-white text-sm leading-none sm:text-xl -mt-2 mb-8 flex gap-2">
    <div onClick={handleBackClick} className="flex items-center cursor-pointer">
      <AiOutlineArrowLeft />
      <p className="text-sm">Back</p>
    </div>
         
     </div>
     </div>
      {/* Overlapping White Box */}
      <div className="relative -top-4 px-6">
          <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4 mb-4">
          <div className="grid grid-cols-4 gap-2">

            <a href="/TeachersProfile" className="flex flex-col sm:flex-row items-center justify-center relative">
           <span className="text-blue-600 text-xs sm:text-sm mb-1 mr-2 sm:mb-0"> Profile
           </span>
           <div className="absolute left-0 right-0 mx-auto w-10/12 border-b-2 border-blue-600 mt-[5.3rem] sm:mt-[4.3rem]"></div>
            </a>

            <a href="/InfomationSystem" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0">Subjects</span>
            </a>

            <a href="/AdminPage" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1 mr-2 sm:mb-0 ">Class Schedule</span>
            </a>

            <a href="/parents" className="flex flex-col sm:flex-row items-center justify-center">
              <span className="text-[#8E959C] text-xs sm:text-sm mb-1  mr-2 sm:mb-0">Attandance</span>
            </a>
          </div>
          </div>
          
          <ProfileTab />
          </div>
     </div>
            </>
  );
};

export default TeachersProfile;