/*
if you are having problem using or populating react-table libary visit the docs >>
https://react-table-library.com/?path=/story/getting-started-installation--page
*/

const TimeTable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "08:40 - 09:40",
    "09:50 - 10:50",
    "10:55 - 11:55",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:05 - 16:05",
    "16:10 - 17:10",
    "17:15 - 18:15",
    "18:20 - 19:20",
  ];

  const mockData = {
    "08:40 - 09:40": {
      Monday: "Math",
      Tuesday: "Science",
      Wednesday: "History",
      Thursday: "PE",
      Friday: "Art",
    },
    "09:50 - 10:50": {
      Monday: "English",
      Tuesday: "Math",
      Wednesday: "Science",
      Thursday: "History",
      Friday: "PE",
    },
    "10:55 - 11:55": {
      Monday: "Science",
      Tuesday: "Math",
      Wednesday: "English",
      Thursday: "History",
      Friday: "PE",
    },
    "12:00 - 13:00": {
      Monday: "History",
      Tuesday: "Science",
      Wednesday: "Math",
      Thursday: "English",
      Friday: "PE",
    },
    "13:00 - 14:00": {
      Monday: "PE",
      Tuesday: "History",
      Wednesday: "Science",
      Thursday: "Math",
      Friday: "English",
    },
    "14:00 - 15:00": {
      Monday: "Art",
      Tuesday: "PE",
      Wednesday: "History",
      Thursday: "Science",
      Friday: "Math",
    },
    "15:05 - 16:05": {
      Monday: "Math",
      Tuesday: "English",
      Wednesday: "PE",
      Thursday: "History",
      Friday: "Science",
    },
    "16:10 - 17:10": {
      Monday: "Science",
      Tuesday: "Math",
      Wednesday: "English",
      Thursday: "PE",
      Friday: "History",
    },
    "17:15 - 18:15": {
      Monday: "History",
      Tuesday: "PE",
      Wednesday: "Science",
      Thursday: "Math",
      Friday: "English",
    },
    "18:20 - 19:20": {
      Monday: "PE",
      Tuesday: "History",
      Wednesday: "Science",
      Thursday: "Math",
      Friday: "English",
    },
  };

  return (
    <div className="p-4 rounded-small border border-grayout">
      <p className="text-small text-schoolpadi-text-grey-lighter font-medium mb-4">
        Time Table
      </p>
      <div className="overflow-hidden rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-schoolpadi-blue-lighter text-sm font-medium text-schoolpadi-grey-secondary p-2">
                Time
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="bg-schoolpadi-blue-lighter p-2 border text-sm font-medium text-schoolpadi-grey-secondary border-white"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot) => (
              <tr key={timeSlot}>
                <td className="bg-schoolpadi-blue-lighter text-schoolpadi-grey-secondary text-small font-medium p-2 border border-white">
                  {timeSlot}
                </td>
                {days.map((day) => (
                  <td
                    key={`${day}-${timeSlot}`}
                    className="bg-schoolpadi-grey-50 text-schoolpadi-grey-secondary p-2 border text-small font-medium border-white"
                  >
                    {mockData[timeSlot] ? mockData[timeSlot][day] : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
