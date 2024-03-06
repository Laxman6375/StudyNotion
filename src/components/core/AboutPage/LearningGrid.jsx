import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Button from "../HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className=" mx-4 lg:mx-auto grid  grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 py-[90px] ">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={` lg:h-[294px] ${
              index === 0 && "lg:col-span-2 bg-transparent mb-5 lg:mb-0"
            } ${
              card.order % 2 === 1 ? " bg-richblack-700" : " bg-richblack-800"
            } ${card.order === 3 && "lg:col-start-2"}`}
          >
            {card.order < 0 ? (
              <div className="flex flex-col gap-3 items-start">
                <div className=" text-richblack-5 font-semibold text-4xl leading-[44px] lg:w-[90%]">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className=" text-richblack-300 font-medium text-base leading-6 lg:w-[80%]">{card.description}</p>
                <Button active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col p-8 gap-8 h-[12.8rem] lg:h-auto">
                <h1 className=" text-richblack-5 text-lg font-semibold leading-6">{card.heading}</h1>
                <p className=" text-richblack-100 font-normal text-sm leading-5">{card.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
