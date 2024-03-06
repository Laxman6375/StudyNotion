import React from "react";
import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_with_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";

const LearningLanguageSection = () => {
  return (
    <div className="pt-[90px]">
      <div className=" w-full flex flex-col  gap-3 items-start lg:items-center">
        <div className=" text-richblack-900 text-4xl font-semibold text-start lg:text-center w-full">
          Your swiss knife for
          <HighlightText text={"learning any language"} />
        </div>
        <p className=" text-base text-start lg:text-center text-richblack-700 font-medium w-full lg:w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
        <div className=" flex flex-col lg:flex-row items-center justify-center -mt-3 mb-10">
          <img
            src={know_your_progress}
            alt="know_your_progress"
            className=" object-contain mt-[52px] lg:mt-0 lg:-mr-32"
          />
          <img
            src={compare_with_others}
            alt="compare_with_others"
            className=" object-contain -mt-12 ml-8 lg:-mt-0 lg:-ml-0 lg:-mb-10"
          />
          <img
            src={plan_your_lessons}
            alt="plan_your_lessons"
            className=" object-contain ml-8 -mt-[70px] lg:-ml-36 lg:-mt-5"
          />
        </div>
        <div className=" mb-8 lg:mb-0 mx-auto lg:mx-0">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
