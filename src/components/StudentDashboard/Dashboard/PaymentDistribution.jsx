import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const PaymentDistribution = () => {
  const data = {
    labels: [
      "School Fees",
      "Tuition",
      "Healthcare",
      "Transportation",
      "Sports",
      "Uniform",
      "Books",
      "Feeding",
    ],
    datasets: [
      {
        data: [10, 20, 10, 10, 10, 10, 20, 20],
        backgroundColor: [
          "#0274E8",
          "#3b82f6",
          "#3599FF",
          "#55A9FF",
          "#8BC4FF",
          "#B1D7FF",
          "#CCE5FF",
          "#E6F2FF",
        ],
        hoverBackgroundColor: [
          "#0274E8",
          "#3b82f6",
          "#3599FF",
          "#55A9FF",
          "#8BC4FF",
          "#B1D7FF",
          "#CCE5FF",
          "#E6F2FF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        color: "#fff",
        formatter: function (value) {
          return `${value}%`;
        },
        anchor: "end",
        align: "start",
        offset: 20,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.2,
  };

  return (
    <div className="relative max-w-full h-full border border-grayout rounded-small w-full flex flex-col">
      <div className="relative">
        <p className="text-schoolpadi-text-grey-lighter p-4 text-small font-medium">
          Payment Distributions
        </p>
      </div>
      <div className="relative flex justify-center">
        {/* Custom Legend */}
        <ul className="flex flex-wrap gap-4 p-4">
          {data.labels.map((label, index) => (
            <li key={index} className="flex items-center gap-2">
              <span
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  width: 10,
                  borderRadius: "50%",
                  height: 10,
                  display: "inline-block",
                }}
              ></span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 w-full h-full flex flex-col items-center justify-center">
        {/* Explicit height and width removed, using flexbox for centering */}
        <div className="w-full max-w-[400px] h-[400px] flex items-center justify-center">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PaymentDistribution;
