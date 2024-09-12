import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from './Modal'; // Assuming you have the Modal component set up with Tailwind

const SchedulingCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: 'Math - Class 3',
      start: '2024-09-09T08:00:00',
      end: '2024-09-09T08:40:00',
      extendedProps: {
        subject: 'Mathematics',
        topic: 'Long Division',
        teacher: 'Johnny Smith',
        class: 'Class 3',
        section: 'Section A',
        day: 'Monday',
      },
    },
    {
      title: 'English - Class 3',
      start: '2024-09-09T08:50:00',
      end: '2024-09-09T09:30:00',
      extendedProps: {
        subject: 'English',
        topic: 'Grammar',
        teacher: 'Jane Doe',
        class: 'Class 3',
        section: 'Section A',
        day: 'Monday',
      },
    },
    // Additional events...
  ];

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={false}
        allDaySlot={false}
        slotMinTime="08:00:00"
        slotMaxTime="17:00:00"
        slotDuration="00:50:00"
        eventClick={handleEventClick}
        height="auto"
        contentHeight="auto"
        dayHeaderClassNames="bg-gray-200 text-center text-sm font-semibold p-1"
        slotLabelClassNames="text-gray-600 text-xs p-2"
        eventClassNames="bg-blue-500 text-white text-sm font-medium"
        eventContent={(eventInfo) => (
          <div className="flex items-center justify-center h-full">
            <span>{eventInfo.event.title}</span>
          </div>
        )}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short',
        }}
        slotLabelInterval={{ minutes: 50 }}
        slotEventOverlap={false}
        slotMinWidth="223.7px"
        eventMinHeight="44px"
        // Custom class for event elements
        eventDidMount={(info) => {
          info.el.style.height = '100%';
          info.el.style.width = '100%';
          info.el.style.maxWidth = '223.7px';
          info.el.style.padding = '4px'; // Padding inside the event block
        }}
      />

      {selectedEvent && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-semibold mb-4">{selectedEvent.extendedProps.subject}</h2>
          <p><strong>Topic:</strong> {selectedEvent.extendedProps.topic}</p>
          <p><strong>Class - Section:</strong> {selectedEvent.extendedProps.class} - {selectedEvent.extendedProps.section}</p>
          <p><strong>Teacher:</strong> {selectedEvent.extendedProps.teacher}</p>
          <p><strong>Day & Time:</strong> {selectedEvent.extendedProps.day}, {selectedEvent.start.toLocaleTimeString()} - {selectedEvent.end.toLocaleTimeString()}</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default SchedulingCalendar;
