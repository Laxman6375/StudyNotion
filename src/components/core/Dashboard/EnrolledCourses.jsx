import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const navigate = useNavigate();

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to Fetch enrolled course", error);
    }
  };

  useEffect(() => {
      getEnrolledCourses();
  }, []);
  return (
    <div className="w-11/12 max-w-[70rem] mx-auto  flex flex-col justify-start items-start text-white mt-10 mb-10 ">
      {!enrolledCourses ? (
        <div className=" w-full h-[75vh] flex justify-center  items-center">
          <div className="loader w-[7rem] h-[7rem]"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p>You have not enrolled in any course yet</p>
      ) : (
        <div className=" w-full">
          <p className=" text-richblack-300 font-normal text-base leading-5">
            Home / Dashboard /{" "}
            <span className=" text-yellow-50">Enrolled Courses</span>
          </p>
          <h1 className=" text-richblack-5 font-semibold text-3xl leading-9 py-6">
            Enrolled Courses
          </h1>
          <div className=" w-full  border border-richblack-600 rounded-[9px] ">
            <div className="flex p-4  bg-richblack-700 border-richblack-700 rounded-t-lg">
              <p className=" w-[75%] text-richblack-50 font-medium text-base leading-5">
                Course Name
              </p>
              <p className=" text-start text-richblack-50 font-medium text-base leading-5">
                Progress
              </p>
            </div>
            {/* Cards are started */}
            {enrolledCourses.map((course, index) => {
              return (
                <div
                  onClick={() => {
                    navigate(
                      `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                    );
                  }}
                  className={`${
                    index === enrolledCourses.length - 1
                      ? ""
                      : "border-b border-richblack-700"
                  } flex w-full p-4 cursor-pointer`}
                  key={course._id}
                >
                  <div className="flex w-[75%] gap-5">
                    <img
                      src={course.thumbnail}
                      className=" w-[4rem] h-[4rem] rounded-lg "
                      alt="thumbnailImage"
                    />
                    <div>
                      <p className=" text-richblack-5 font-medium text-xl leading-6 mb-4">
                        {course.courseName}
                      </p>
                      <p className=" text-richblack-300 font-normal text-base leading-5">
                        {course.courseDescription}
                      </p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className=" w-[25%]">
                    <p className=" text-richblack-50 text-base font-semibold leading-5 mb-2">
                      Progress: {course.progressPercentage || "0"}%
                    </p>
                    <ProgressBar
                      className=" w-[80%]"
                      bgColor="#47A5C5"
                      completed={course.progressPercentage || 0}
                      height="8px"
                      isLabelVisible={false}
                      maxCompleted={100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
