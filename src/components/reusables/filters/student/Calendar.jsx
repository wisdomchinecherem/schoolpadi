const FullYearCalendar = ({ year, attendanceData }) => {
  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Generate days in a month
  const generateDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate(); // returns the number of days in the month
  };

  // Map the attendance data to dates
  const getAttendanceStatus = (date) => {
    const status = attendanceData.find(
      (att) => new Date(att.date).toDateString() === date.toDateString()
    );
    return status ? status.type : null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {monthNames.map((month, index) => {
        const daysInMonth = generateDaysInMonth(index, year);

        return (
          <div key={month} className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              {month} {year}
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {/* Weekdays */}
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <div key={i} className="text-center font-medium">
                  {day}
                </div>
              ))}

              {/* Days */}
              {[...Array(daysInMonth)].map((_, day) => {
                const date = new Date(year, index, day + 1);
                const status = getAttendanceStatus(date);

                return (
                  <div
                    key={day}
                    className={`text-center p-2 rounded-lg ${
                      status === "present"
                        ? "bg-green-200"
                        : status === "absent"
                        ? "bg-red-200"
                        : "bg-gray-200"
                    }`}
                  >
                    {day + 1}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FullYearCalendar;
