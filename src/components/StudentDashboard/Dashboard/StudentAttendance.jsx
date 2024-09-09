import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import "chartjs-plugin-datalabels";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const StudentAttendanceChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Present",
        data: [15, 9, 15, 12, 12, 13, 14, 20, 17, 13, 15, 14],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Absent",
        data: [20, 15, 13, 12, 10, 9, 11, 17, 15, 12, 14, 10],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#000",
          usePointStyle: true,
          boxWidth: 10,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
      datalabels: {
        // Disable datalabels
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        // Set the maximum value to 25
        max: 25,
        grid: {
          display: true,
          color: "#f3f4f6",
        },
        ticks: {
          stepSize: 5,
          color: "#9ca3af",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-4 max-w-[100%] w-full rounded-xl">
      <div className="text-schoolpadi-text-grey-lighter text-small font-medium mb-2">
        Attendance Summary
      </div>
      <div className="max-w-[100%] p-4">
        <Bar data={data} options={options} height={400} />
      </div>
    </div>
  );
};

export default StudentAttendanceChart;
