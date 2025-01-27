'use client';
import { PriceRange } from "@/app/component/PriceRange";
import { FooterNavigation } from "@/app/component/FooterNavigation";
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
import LineChart from "@/app/component/LineChart";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, BarElement);

const Dashboard = () => {
  const { id } = useParams();

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
    <Box className="p-4 bg-gray-950 text-gray-200 min-h-screen border border-gray-800">
      <Typography variant="h5" className="mb-6 text-center text-2xl font-bold text-gray-100">
        Dashboard ID: {id}
      </Typography>

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Box className="space-y-6 flex justify-center flex-col bg-gray-800 p-6 rounded-2xl shadow-lg">
          <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-2xl w-full mx-auto">
            <Box className="flex justify-normal items-center mb-4 bg-gray-800 rounded-2xl shadow-lg">
              <Typography variant="h6" className="text-emerald-400">
                Total Value Locked (TVL)
              </Typography>
              <Box className="flex space-x-2 bg-gray-800 rounded-2xl shadow-lg">
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
            <LineChart />
          </Card>

          <Card className="bg-gray-800 p-6 rounded-2xl shadow-lg max-w-2xl w-full mx-auto">
            <Box className="flex justify-end items-center mb-4 rounded-2xl shadow-lg">
              <Typography variant="h6" className="text-blue-400">
                Volume
              </Typography>
              <Box className="flex space-x-2 rounded-2xl shadow-lg">
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
              className="bg-gray-700 rounded-2xl shadow-lg"
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
              }}
              height={150}
            />
          </Card>
        </Box>

        <Box className="flex w-full justify-center flex-col">
          <Box className="space-y-6 w-4/5 max-w-2xl p-6 bg-gray-800 rounded-2xl shadow-lg">
            <PriceRange />
            <CommissionOptions />
            <FooterNavigation />
          </Box>
        </Box>


      </Box>
    </Box>
  );
};

export default Dashboard;