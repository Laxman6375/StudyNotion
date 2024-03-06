import React from 'react'

const Tips = [
  "Set the Course Price option or make it free.",
  "Standard size for the course thumbnail is 1024x576.",
  "Video section controls the course overview video.",
  "Course Builder is where you create & organize a course.",
  "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
  "Information from the Additional Data section shows up on the course single page.",
  "Make Announcements to notify any important",
  "Notes to all enrolled students at once.",
];

const CourseUploadTips = () => {
  return (
    <div className="h-[24rem] flex flex-col items-start gap-5 p-6 bg-richblack-800 border-richblack-700  rounded-lg">
      <p className=" text-start text-richblack-5 font-semibold text-lg leading-6">
        ⚡Course Upload Tips
      </p>
      <ul className=" pl-6 list-disc flex flex-col gap-2">
        {Tips.map((tips, i) => {
          return (
            <li
              className=" text-richblack-5 font-medium text-sm leading-5"
              key={i}
            >
              {tips}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseUploadTips