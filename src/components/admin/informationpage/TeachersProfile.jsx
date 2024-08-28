import ProfileTab from '../../teacher/administration/ProfileTab'


const TeachersProfile = () => {

     return (
          <>
     <div className=" relative  ">
          {/* Overlapping White Box */}
          <div className="relative -top-6 px-6">
          <div className="bg-white rounded-lg shadow-lg mx-4 py-6 px-4" style={{ color: '#54585C' }}></div>
          <ProfileTab />
          </div>
     </div>
            </>
  );
};

export default TeachersProfile;