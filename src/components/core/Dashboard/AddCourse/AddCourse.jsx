import React from "react";
import RenderSteps from "./RenderSteps";
import CourseUploadTips from "./CourseUploadTips";


const AddCourse = () => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-8  mt-10 w-11/12 max-w-[62.5rem] lg:overflow-x-hidden mx-auto">
        <div className=" lg:w-[60%]">
          <h1 className=" py-6 text-richblack-5 font-semibold text-3xl leading-9 ">
            Add Course
          </h1>
          <div>
            <RenderSteps />
          </div>
        </div>
        <div className="hidden lg:block w-[40%]">
          <CourseUploadTips />
        </div>
      </div>
    </>
  );
};

export default AddCourse;
