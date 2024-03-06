import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './Button';
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className=" py-[90px]">
      <div className="flex  flex-col lg:flex-row gap-24 items-center">
        <div className=" w-full lg:w-[50%]">
          <img
            src={Instructor}
            alt="instructor"
            className=" shadow-white shadow-[-5px_-5px_10px_0px] lg:shadow-[-20px_-20px_20px_0px]"
          />
        </div>
        <div className=" w-full lg:w-[50%] flex flex-col items-start gap-3">
          <div className=" text-4xl font-semibold text-richblack-5 w-[50%]">
            Become an
            <HighlightText text={"Instructor"} />
          </div>
          <p className="  text-base text-richblack-300 font-medium w-full lg:w-[80%]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className=" w-fit pt-7 lg:pt-[52px]">
            <CTAButton active={true} linkto={"/signup"}>
              <div className=" flex flex-row gap-2  items-center ">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorSection