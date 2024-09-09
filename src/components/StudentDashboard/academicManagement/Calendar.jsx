import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const events = [
    {
      title: "Mathematics",
      start: "2024-08-19T08:00:00",
      end: "2024-08-19T08:40:00",
      extendedProps: {
        class: "Class 3",
        students: 32,
        attendance: 0,
        live: true,
      },
    },
    {
      title: "English",
      start: "2024-08-19T09:40:00",
      end: "2024-08-19T10:20:00",
      extendedProps: {
        class: "Class 3",
        students: 32,
        attendance: 0,
        live: true,
      },
    },
    {
      title: "Lab",
      start: "2024-08-19T11:20:00",
      end: "2024-08-19T12:00:00",
      extendedProps: {
        class: "Class 3",
        students: 32,
        attendance: 0,
        live: true,
      },
    },
    {
      title: "Biology",
      start: "2024-08-19T01:00:00",
      end: "2024-08-19T01:40:00",
      extendedProps: {
        class: "Class 3",
        students: 32,
        attendance: 0,
        live: true,
      },
    },
    {
      title: "Physics",
      start: "2024-08-19T02:40:00",
      end: "2024-08-19T03:20:00",
      extendedProps: {
        class: "Class 3",
        students: 32,
        attendance: 0,
        live: true,
      },
    },
  ];

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <div>{eventInfo.event.title}</div>
        <div>{eventInfo.event.extendedProps.class}</div>
        <div>
          <span
            style={{
              backgroundColor: "orange",
              padding: "2px 5px",
              borderRadius: "3px",
              marginRight: "5px",
            }}
          >
            <i className="fas fa-user"></i>{" "}
            {eventInfo.event.extendedProps.students} Students
          </span>
          <span
            style={{
              backgroundColor: "lightblue",
              padding: "2px 5px",
              borderRadius: "3px",
              marginRight: "5px",
            }}
          >
            <i className="fas fa-clipboard"></i> Attendance
          </span>
          <span
            style={{
              backgroundColor: "lightgreen",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            <i className="fas fa-video"></i> Live
          </span>
        </div>
      </>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "title",
          center: "",
          right: "timeGridWeek,timeGridDay",
        }}
        views={{
          timeGridWeek: {
            type: "timeGrid",
            duration: { days: 5 },
            slotMinTime: "08:00:00",
            slotMaxTime: "16:00:00",
            allDaySlot: false,
            slotLabelFormat: {
              hour: "numeric",
              minute: "2-digit",
              omitZeroMinute: false,
              meridiem: "short",
            },
          },
        }}
        events={events}
        eventContent={renderEventContent}
        height="auto"
      />
    </div>
  );
};

export default Calendar;
