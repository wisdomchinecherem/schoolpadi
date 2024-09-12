const ParentProfile = () => {
  const profileData = {
    parentInfo: {
      fatherName: "Solomon David",
      motherName: "Martha David",
      username: "Solomon",
      parentContact: "080 5868 484",
      parentEmail: "thedavids01@gmail.com",
    },
    students: [
      {
        id: 1,
        name: "Student Name 1",
        studentId: "123456FR",
        phone: "080 5868 484",
        email: "thedavids01@gmail.com",
        profileImage: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Student Name 2",
        studentId: "123456FR",
        phone: "080 5868 484",
        email: "thedavids01@gmail.com",
        profileImage: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div className="p-6 border border-gray-300 rounded-md">
      {/* Parent Info */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">General Information</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <span className="font-semibold">Father’s Name:</span>
          <span>{profileData.parentInfo.fatherName}</span>
          
          <span className="font-semibold">Mother’s Name:</span>
          <span>{profileData.parentInfo.motherName}</span>
          
          <span className="font-semibold">Username:</span>
          <span>{profileData.parentInfo.username}</span>
          
          <span className="font-semibold">Parent Contact:</span>
          <span>{profileData.parentInfo.parentContact}</span>
          
          <span className="font-semibold">Parent Email:</span>
          <span>{profileData.parentInfo.parentEmail}</span>
        </div>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {profileData.students.map((student) => (
          <div
            key={student.id}
            className="border rounded-lg p-4 shadow-md flex items-center space-x-4"
          >
            <img
              src={student.profileImage}
              alt={student.name}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h4 className="font-medium">{student.name}</h4>
              <p>{student.studentId}</p>
              <p>{student.phone}</p>
              <p>{student.email}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentProfile;
