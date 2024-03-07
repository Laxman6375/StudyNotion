import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully commited to the success company.",
  },
  {
    Logo: Logo2,
    Heading: "Leadership",
    Description: "Fully commited to the success company.",
  },
  {
    Logo: Logo3,
    Heading: "Leadership",
    Description: "Fully commited to the success company.",
  },
  {
    Logo: Logo4,
    Heading: "Leadership",
    Description: "Fully commited to the success company.",
  },
];

const TimelineSection = () => {
  return (
    <div className="mt-6">
      <div className="  flex flex-col lg:flex-row items-center justify-between gap-[76px]">
        <div className=" w-full lg:w-[45%] flex flex-col gap-8 lg:gap-3">
          {timeline.map((element, index) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-row gap-6">
                  <div className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-full shadow-lg ">
                    <img src={element.Logo} alt="Logo images" />
                  </div>
                  <div>
                    <h2 className=" font-semibold text-lg text-richblack-800">
                      {element.Heading}
                    </h2>
                    <p className=" text-sm text-richblack-700">
                      {element.Description}
                    </p>
                  </div>
                </div>
                <div
                  className={` ${
                    timeline.length - 1 === index ? "hidden" : "lg:block"
                  } w-6 h-14 border-dotted border-r border-richblack-100`}
                ></div>
              </React.Fragment>
            );
          })}
        </div>

        <div className=" relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <img
            src={timelineImage}
            alt="timeline "
            className=" shadow-white shadow-[20px_20px_0px_0px] object-cover h-fit"
          />

          <div className=" absolute bg-caribbeangreen-700 flex flex-row text-white uppercase p-[20px] lg:p-[42px] gap-7 lg:gap-[52px] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className="flex items-center gap-6">
              <p className=" text-4xl font-bold ">10</p>
              <p className=" text-caribbeangreen-300 text-sm">
                Years <br /> Experience
              </p>
            </div>
            <div className="border-r border-caribbeangreen-500"></div>
            <div className="flex items-center gap-6">
              <p className=" text-4xl font-bold">250</p>
              <p className=" text-caribbeangreen-300 text-sm">
                types of <br />
                courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
