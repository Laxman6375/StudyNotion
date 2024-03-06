import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating.js";

const CourseCard = ({ course, Height }) => {
   
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);
  return (
    <div>
      <Link
        className="flex flex-col gap-5 items-start cursor-pointer  hover:scale-[1.03] transition-all duration-200"
        to={`/courses/${course._id}`}
      >
        <div>
          <img
            src={course?.thumbnail}
            alt="courseThumbnail"
            className={`${Height} w-full rounded-lg object-cover`}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" text-richblack-5 font-medium text-lg leading-6">
            {course.courseName}
          </p>
          <p className=" text-richblack-300 font-normal text-base leading-6">
            By{" "}
            <span className=" text-yellow-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </span>
          </p>
          <div className=" text-base font-semibold leading-6 flex gap-x-2">
            <span className=" text-yellow-100">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="hidden lg:block text-richblack-400">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>
          <p className=" text-richblack-5 font-semibold leading-6 text-lg mb-10">
            Rs. {course?.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
