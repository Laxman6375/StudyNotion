import React from "react";

const StatsData = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const Stats = () => {
  return (
    <div className="lg:w-11/12 max-w-maxContent grid grid-cols-2 lg:grid-cols-4 text-center gap-[10px] text-white mx-auto py-[90px]">
      {StatsData.map((data, index) => {
        return (
          <div key={index} className="flex flex-col gap-3">
            <p className=" text-richblack-5 font-bold text-3xl leading-9 text-center">
              {data.count}
            </p>
            <p className=" text-richblack-500 text-base font-semibold leading-6 text-center">
              {data.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
