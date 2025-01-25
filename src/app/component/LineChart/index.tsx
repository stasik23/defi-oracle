import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
            {
                label: "Performance",
                data: [95, 94, 95, 90, 95, 100, 95],
                fill: true,
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                borderColor: "rgba(0, 0, 255, 1)",
                borderWidth: 2,
                tension: 0.1,
                pointBorderColor: "rgba(0, 0, 255, 1)",
                pointBackgroundColor: "rgba(0, 0, 255, 1)",
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
    };

    return (
        <div style={{ height: "110px", width: "100%" }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
