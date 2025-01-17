import { studentProfile } from "../placeholder";

const Profile = () => {
  return (
    <>
      <div className="max-w-full mx-auto mt-[2rem] bg-white rounded-lg">
        {studentProfile.map((profileData, index) => {
          const profile = profileData.studentProfile;

          return (
            <div key={index} className="mb-8 w-full flex">
              {/* Left Section: Image and Name */}
              <div className="w-1/3 flex flex-col p-4 items-center">
                <img
                  src={profile.studentImage}
                  alt="Student"
                  className="w-[300px] h-[344px] object-cover mb-4"
                />
                <h2 className="font-medium text-[#6E7479]">
                  {profile.studentDetails.fullName}
                </h2>
                <span className="text-[#027FFF] text-[12px] font-medium">
                  ({profile.studentDetails.role})
                </span>
              </div>

              {/* Right Section: Details */}
              <div className="w-2/3 p-4 rounded-[12px] border">
                {/* Academic and General Information */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-schoolpadi-grey-primary text-lg font-medium">
                      Academic Detail
                    </h3>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Academic Session:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.academicDetail.academicSession}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Section:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.academicDetail.section}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Class:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.academicDetail.class}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-schoolpadi-grey-primary font-medium">
                      General Information
                    </h3>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        First Name:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.generalInformation.firstName}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Last Name:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.generalInformation.lastName}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Student ID:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.generalInformation.studentID}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Personal and Additional Information */}
                <div className="grid grid-cols-2 mt-[47px] gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-medium text-schoolpadi-grey-primary">
                      Personal Information
                    </h3>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Student Email:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {
                          profile.studentDetails.personalInformation
                            .studentEmail
                        }
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Date of Birth:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.personalInformation.dob}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Contact:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {
                          profile.studentDetails.personalInformation
                            .studentContact
                        }
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Gender:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.personalInformation.gender}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Blood Group:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.personalInformation.bloodGroup}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-schoolpadi-grey-primary">
                      Additional Details
                    </h3>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Address:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.address}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Zip Code:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.zipCode}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        State:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.state}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Country:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.country}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Father's Name:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.fatherName}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Mother's Name:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.motherName}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Parent Contact:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.parentContact}
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-schoolpadi-grey-secondary text-small font-medium">
                        Parent Email:
                      </span>{" "}
                      <span className="text-schoolpadi-grey-primary text-small">
                        {profile.studentDetails.additionalDetails.parentEmail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills and Social Details */}
                <div className="mb-6 mt-[47px]">
                  <h3 className="font-medium text-lg text-schoolpadi-grey-primary">
                    Skills & Social Details
                  </h3>
                  <div className="mt-6">
                    <span className="text-schoolpadi-grey-secondary text-small font-medium">
                      Profile Summary:
                    </span>{" "}
                    <span className="text-schoolpadi-grey-primary text-small">
                      {
                        profile.studentDetails.skillsAndSocialDetails
                          .profileSummary
                      }
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-schoolpadi-grey-secondary text-small font-medium">
                      Skills:
                    </span>{" "}
                    <span className="text-schoolpadi-grey-primary text-small">
                      {profile.studentDetails.skillsAndSocialDetails.skills.join(
                        ", "
                      )}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-schoolpadi-grey-secondary text-small font-medium">
                      Facebook Profile Link:
                    </span>{" "}
                    <a
                      href={
                        profile.studentDetails.skillsAndSocialDetails
                          .facebookProfileLink
                      }
                      className="text-schoolpadi-grey-primary text-small"
                    >
                      {
                        profile.studentDetails.skillsAndSocialDetails
                          .facebookProfileLink
                      }
                    </a>
                  </div>
                  <div className="mt-4">
                    <span className="text-schoolpadi-grey-secondary text-small font-medium">
                      LinkedIn Profile Link:
                    </span>{" "}
                    <a
                      href={
                        profile.studentDetails.skillsAndSocialDetails
                          .linkedinProfileLink
                      }
                      className="text-schoolpadi-grey-primary text-small"
                    >
                      {
                        profile.studentDetails.skillsAndSocialDetails
                          .linkedinProfileLink
                      }
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
