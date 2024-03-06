import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={` ${
        currentCard === cardData?.heading
          ? "bg-white text-richblack-800 shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } box-border cursor-pointer w-full lg:w-[30%] h-[300px] `}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className=" flex flex-col gap-3  px-6 pt-8 pb-[52px] h-[80%] border-b-[2px] border-dashed border-richblack-400">
        <h2 className="text-xl font-semibold">{cardData.heading}</h2>
        <p className=" text-richblack-500 text-base font-normal">
          {cardData.description}
        </p>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading
            ? "text-blue-300"
            : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        <div className="flex gap-2 items-center">
          <HiUsers />
          <div className={`text-base font-medium`}>{cardData.level}</div>
        </div>
        <div className="flex gap-2 items-center">
          <ImTree />
          <div className={`text-base font-medium`}>
            {cardData.lessionNumber} Lession
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default CourseCard;
