'use client';
// import React, { useMemo } from "react";
// import { Box, Card, Typography, Button } from "@mui/material";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   BarElement,
// } from "chart.js";
// import { Line, Bar } from "react-chartjs-2";
// import { useParams } from "next/navigation";
import { PriceRange } from "@/app/component/PriceRange";
import { FooterNavigation } from "@/app/component/FooterNavigation";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

// const Dashboard = () => {
//   const { id } = useParams();

//   if (!id) {
//     return <Typography className="text-white">Loading...</Typography>;
//   }

//   const lineChartData = useMemo(
//     () => ({
//       labels: ["04:00", "09:00", "14:00", "19:00", "00:00"],
//       datasets: [
//         {
//           label: "TVL",
//           data: [22, 23, 24, 25, 24.7],
//           borderColor: "#4CAF50",
//           borderWidth: 2,
//           tension: 0.4,
//         },
//       ],
//     }),
//     []
//   );

//   const barChartData = useMemo(
//     () => ({
//       labels: ["04:00", "09:00", "14:00", "19:00", "00:00"],
//       datasets: [
//         {
//           label: "Volume",
//           data: [28, 30, 32, 31, 32.4],
//           backgroundColor: "#2196F3",
//           borderRadius: 8,
//           barThickness: 12,
//         },
//       ],
//     }),
//     []
//   );

//   return (
//     <Box className="p-8 bg-gray-900 text-white min-h-screen">
//       <Typography variant="h5" className="mb-6 text-center text-xl font-bold">
//         Dashboard ID: {id}
//       </Typography>
//       {/* Top Charts Section */}
//       <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {/* TVL Chart */}
//         <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
//           <Typography variant="h6" className="text-green-400 mb-2">
//             Total Value Locked (TVL)
//           </Typography>
//           <Typography variant="h4" className="font-bold mb-4">
//             $24.7M
//           </Typography>
//           <Line
//             data={lineChartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: true,
//               plugins: {
//                 legend: {
//                   display: false,
//                 },
//               },
//               scales: {
//                 x: {
//                   ticks: { color: "#aaa" },
//                   grid: { color: "#444" },
//                 },
//                 y: {
//                   ticks: { color: "#aaa" },
//                   grid: { color: "#444" },
//                 },
//               },
//             }}
//             height={150}
//           />
//         </Card>

//         {/* Volume Chart */}
//         <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
//           <Typography variant="h6" className="text-blue-400 mb-2">
//             Volume
//           </Typography>
//           <Typography variant="h4" className="font-bold mb-4">
//             $32.4M
//           </Typography>
//           <Bar
//             data={barChartData}
//             options={{
//               responsive: true,
//               maintainAspectRatio: true,
//               plugins: {
//                 legend: {
//                   display: false,
//                 },
//               },
//               scales: {
//                 x: {
//                   ticks: { color: "#aaa" },
//                   grid: { color: "#444" },
//                 },
//                 y: {
//                   ticks: { color: "#aaa" },
//                   grid: { color: "#444" },
//                 },
//               },
//             }}
//             height={150}
//           />
//         </Card>
//       </Box>

//       {/* Sidebar Section */}
//       <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Options */}
//         <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg col-span-2">
//           <Typography variant="h6" className="text-gray-400 mb-4">
//             Options
//           </Typography>
//           <Box className="grid grid-cols-4 gap-4">
//             {[0.01, 0.05, 0.3, 1].map((val, index) => (
//               <Button
//                 key={index}
//                 variant="contained"
//                 className={
//                   val === 0.05
//                     ? "bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
//                     : "bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
//                 }
//               >
//                 {val}%
//               </Button>
//             ))}
//           </Box>
//         </Card>

//         {/* Price Range */}
//         <PriceRange />
//       </Box>

//       {/* Footer Navigation */}
//       <FooterNavigation />
//     </Box>
//   );
// };

// export default Dashboard;
import React, { useMemo } from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useParams } from "next/navigation";
import { CommissionOptions } from "@/app/component/CommissionOptions";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

const Dashboard = () => {
  const { id } = useParams();

  if (!id) {
    return <Typography className="text-white">Loading...</Typography>;
  }

  const lineChartData = useMemo(
    () => ({
      labels: ["04:00", "09:00", "14:00", "19:00", "00:00"],
      datasets: [
        {
          label: "TVL",
          data: [22, 23, 24, 25, 24.7],
          borderColor: "#34D399",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    }),
    []
  );

  const barChartData = useMemo(
    () => ({
      labels: ["04:00", "09:00", "14:00", "19:00", "00:00"],
      datasets: [
        {
          label: "Volume",
          data: [28, 30, 32, 31, 32.4],
          backgroundColor: "#3B82F6",
          borderRadius: 8,
          barThickness: 12,
        },
      ],
    }),
    []
  );

  return (
    <Box className="p-12 mt-12 bg-gray-950 text-gray-200 min-h-screen border border-gray-800">
      <Typography variant="h5" className="mb-6 text-center text-2xl font-bold text-gray-100">
        Dashboard ID: {id}
      </Typography>
      {/* Top Charts Section */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg col-span-2">
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="text-emerald-400">
              Total Value Locked (TVL)
            </Typography>
            <Box className="flex space-x-2">
              {["1D", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((period, index) => (
                <Button
                  key={index}
                  variant="text"
                  className={
                    index === 0
                      ? "text-blue-400 bg-gray-700 px-3 py-1 rounded-lg"
                      : "text-gray-400 px-3 py-1"
                  }
                >
                  {period}
                </Button>
              ))}
            </Box>
          </Box>
          <Typography variant="h4" className="font-bold mb-4 text-gray-100">
            $24.7M
          </Typography>
          <Line
            data={lineChartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: { color: "#9CA3AF" },
                  grid: { color: "#374151" },
                },
                y: {
                  ticks: { color: "#9CA3AF" },
                  grid: { color: "#374151" },
                },
              },
            }}
            height={150}
          />
        </Card>
        <Box />

        {/* Volume Chart */}
        <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="text-blue-400">
              Volume
            </Typography>
            <Box className="flex space-x-2">
              {["1D", "7D", "1M", "3M", "6M", "1Y", "ALL"].map((period, index) => (
                <Button
                  key={index}
                  variant="text"
                  className={
                    index === 0
                      ? "text-blue-400 bg-gray-700 px-3 py-1 rounded-lg"
                      : "text-gray-400 px-3 py-1"
                  }
                >
                  {period}
                </Button>
              ))}
            </Box>
          </Box>
          <Typography variant="h4" className="font-bold mb-4 text-gray-100">
            $32.4M
          </Typography>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: { color: "#9CA3AF" },
                  grid: { color: "#374151" },
                },
                y: {
                  ticks: { color: "#9CA3AF" },
                  grid: { color: "#374151" },
                },
              },
            }}
            height={150}
          />
        </Card>
      </Box>

      {/* Sidebar Section */}
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Options */}
        {/* <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg col-span-2">
          <Typography variant="h6" className="text-gray-400 mb-4">
            Options
          </Typography>
          <Box className="grid grid-cols-4 gap-4">
            {[0.01, 0.05, 0.3, 1].map((val, index) => (
              <Button
                key={index}
                variant="contained"
                className={
                  val === 0.05
                    ? "bg-blue-500 hover:bg-blue-400 text-gray-100 rounded-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg"
                }
              >
                {val}%
              </Button>
            ))}
          </Box>
        </Card> */}

        {/* Price Range */}
        <PriceRange />

        {/* Commission */}
        <CommissionOptions />
      </Box>

      {/* Footer Navigation */}
      <FooterNavigation />
    </Box>
  );
};

export default Dashboard;
