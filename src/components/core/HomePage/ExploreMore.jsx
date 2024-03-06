import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    console.log("PRinting result", result);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div>
      <div className="  flex flex-col items-center lg:gap-9 pt-8 lg:pt-[90px]">
        <div className=" text-4xl font-semibold text-start lg:text-center">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className=" text-start lg:text-center text-base text-richblack-300 font-medium mt-2">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        <div className="  flex flex-row gap-3 rounded-full bg-richblack-800 p-1">
          {tabsName.map((element, i) => {
            return (
              <div
                className={`hidden lg:block text-base font-medium flex flex-row items-center gap-2
                              ${
                                currentTab === element
                                  ? " bg-richblack-900 text-richblack-5 font-medium"
                                  : " text-richblack-200"
                              } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                key={i}
                onClick={() => setMyCards(element)}
              >
                {element}
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block lg:h-[200px]"></div>
        <div className=" lg:absolute lg:bottom-0 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[35%] flex flex-wrap lg:flex-nowrap flex-row gap-9 justify-between w-full pt-8 px-3 lg:px-0">
          {courses.map((element, index) => {
            return (
              <CourseCard
                key={index}
                cardData={element}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
