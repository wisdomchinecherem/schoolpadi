
const ProfileTab = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section - Image and Name */}
          <div className="flex flex-col items-center md:w-1/3 w-full">
            <img
              src="/student.svg" // Replace with the actual image path
              alt="Student"
              className="rounded-lg w-full h-2/5 object-contain"
            />
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold text-[#54585C]">King David</h2>
              <p className="text-blue-500">(Student)</p>
            </div>
          </div>

          {/* Right Section - Tab Content */}
          <div className="md:w-3/4 border rounded-xl p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h3 className="text-lg font-[500] text-[#54585C]">Academic Detail</h3>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C] text-sm">Academic Session </span> : SY 2024</p>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C]">Section</span> : SECTION A</p>
          <p className="text-sm text-[#54585C]"> <span className="text-[#8E959C]">Class</span>: CLASS 2</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">General Information</h3>
          <p>First Name: King</p>
          <p>Last Name: David</p>
          <p>Student ID: 123456FR</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Personal Information</h3>
          <p>Student Email: kingdavid34@gmail.com</p>
          <p>Date of Birth: 04-02-2005</p>
          <p>Student Contact: 081 4857 473</p>
          <p>Gender: Male</p>
          <p>Blood Group: AB-</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Additional Details</h3>
          <p>Address: Lot 45, GRA</p>
          <p>Zip Code: 283653</p>
          <p>State: Lagos</p>
          <p>Country: Nigeria</p>
          <p>Father’s Name: Solomon David</p>
          <p>Mother’s Name: Martha David</p>
          <p>Parent Contact: 080 5868 484</p>
          <p>Parent Email: thedavids01@gmail.com</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Skills & Social Details</h3>
        <div className="mt-2">
          <h4 className="font-semibold">Profile Summary:</h4>
          <p>
            King David is a dedicated and ambitious student known for his strong academic performance
            and leadership qualities. He excels in subjects such as mathematics, science, and history,
            consistently achieving top grades. David is also actively involved in extracurricular activities,
            including the debate team, student government, and the school’s robotics club. His peers and
            teachers describe him as a motivated individual with excellent problem-solving skills and a
            collaborative spirit. David aspires to pursue a career in engineering and is committed to making
            a positive impact in his community through his academic and extracurricular endeavors.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Skills:</h4>
          <p>Time management, critical thinking, communication, technological proficiency</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Facebook Profile Link:</h4>
          <p><a href="https://www.facebook.com/alisontwerner/profile" className="text-blue-600">https://www.facebook.com/alisontwerner/profile</a></p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">LinkedIn Profile Link:</h4>
          <p><a href="https://www.linkedin.com/in/alisontwerner/profile" className="text-blue-600">https://www.linkedin.com/in/alisontwerner/profile</a></p>
        </div>
      </div>
    </div>
        </div>
   
  );
};

export default ProfileTab;
