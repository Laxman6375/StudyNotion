import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStarts from "react-rating-stars-component";
import { GiNinjaStar } from "react-icons/gi";
import { FiTrash2 } from "react-icons/fi";
import { removeFromCart } from "../../../../slices/cartSlice";


const RenderCartCourses = () => {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  return (
    <div className=" lg:w-[75%] flex flex-col items-start gap-8 text-white ">
      {cart.map((course, index) => {
        return (
          <div className=" flex justify-between w-full border-b border-richblack-600 pb-8" key={index}>
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={course.thumbnail}
                alt="coursethumbnail"
                className=" w-[14rem] h-[9rem] rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <p className=" text-richblue-5 font-semibold text-xl leading-6">
                  {course?.courseName}
                </p>
                <p className=" text-richblack-300 font-medium text-lg leading-5">
                  {course?.category?.name}
                </p>
                <div className="flex gap-2 items-center ">
                  <span className=" text-yellow-100 text-base font-semibold leading-6">
                    4.8
                  </span>
                  <ReactStarts
                    count={5}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<GiNinjaStar />}
                    fullIcon={<GiNinjaStar />}
                  />

                  <span className=" text-richblack-400  text-base font-medium leading-6">
                    {course?.ratingAndReviews?.length} Ratings
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <button
                className=" p-3 rounded-lg border border-richblack-700 bg-richblack-800 flex items-center justify-center gap-2 text-pink-200"
                onClick={() => dispatch(removeFromCart(course._id))}
              >
                <FiTrash2 />
                <span>Remove</span>
              </button>
              <p className=" text-yellow-50 font-semibold text-2xl leading-8">
                Rs {course?.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCartCourses;
