import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students");

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(color);
    }
    return colors;
  };

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
    
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                boxWidth: 10,
                                boxHeight: 10,
                                padding: 20,
                                font: {
                                    size: 12,
                                },
                            },
                        },
                    },
                    aspectRatio: 2,
                
  };

  return (
    <div className=" flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
      <div className=" flex items-center flex-row  justify-between">
        <p className="text-lg font-bold text-richblack-5">Visualize</p>
        <div className="space-x-4 font-semibold">
          {/* Button to switch to the "students" chart */}
          <button
            onClick={() => setCurrChart("students")}
            className={`rounded-md p-2 px-3 transition-all duration-200 ${
              currChart === "students"
                ? "bg-richblack-900 text-yellow-100"
                : "bg-richblack-800 text-richblack-100"
            }`}
          >
            Students
          </button>
          {/* Button to switch to the "income" chart */}
          <button
            onClick={() => setCurrChart("income")}
            className={`rounded-md p-2 px-3 transition-all duration-200 ${
              currChart === "income"
                ? "bg-richblack-900 text-yellow-100"
                : "bg-richblack-800 text-richblack-100"
            }`}
          >
            Income
          </button>
        </div>
      </div>
      <div className="relative mx-auto aspect-square h-[11rem] lg:h-full w-[19rem] lg:w-full">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
         
        />
      </div>
    </div>
  );
}
