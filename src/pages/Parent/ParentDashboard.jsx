import AttendanceChart from "../../components/StudentDashboard/Dashboard/Attendance";
import PaymentDistribution from "../../components/StudentDashboard/Dashboard/PaymentDistribution";
import Planning from "../../components/StudentDashboard/Dashboard/Planning";
import StudentAttendanceChart from "../../components/StudentDashboard/Dashboard/StudentAttendance";
import StudentsDetails from "../../components/StudentDashboard/Dashboard/StudentDetails";
import StudentEvents from "../../components/StudentDashboard/Dashboard/StudentEvents";
import TimeTable from "../../components/StudentDashboard/Dashboard/TimeTable";

const ParentDashboard = () => {
  return (
    <>
      <div className="mx-4 md:mx-4 lg:mx-auto">
        {/* studentdetails */}

        <div className="py-[8px] px-[12px] bg-white rounded-md mt-[38px] max-w-fit">
          <span className="text-[#8E959C] text-[14px]">Child Name 1</span>
        </div>

        <div className="">
          <StudentsDetails />
        </div>

        {/* student events */}

        <StudentEvents />

        {/* payment distribution chart */}

        <div className="flex items-stretch mt-6 responsive-flex-col w-full gap-4">
          <div className="max-w-[532px] max-full-md-screen w-full flex">
            <PaymentDistribution />
          </div>
          <div className="flex flex-col w-full h-full border border-grayout rounded-xl p-4">
            <AttendanceChart />
            <StudentAttendanceChart />
          </div>
        </div>

        {/* time table */}
        <div className="mt-6 padding-small-screen">
          <TimeTable />
        </div>

        {/* Planning */}
        <Planning />
      </div>
    </>
  );
};

export default ParentDashboard;
