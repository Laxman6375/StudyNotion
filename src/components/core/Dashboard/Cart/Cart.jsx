import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart);
  console.log("total", total, totalItems);
  return (
    <div className=" w-11/12 max-w-[70rem] mx-auto  flex flex-col justify-start items-start">
      <h1 className=" text-richblack-5 font-semibold text-3xl leading-9 mt-10">
        Cart
      </h1>
      <p className=" text-richblack-400 font-semibold text-base leading-6 border-b border-richblack-700 w-full pb-3">
        {totalItems || 0} Courses in your Cart
      </p>

      {totalItems > 0 ? (
        <div className=" w-full flex flex-col-reverse lg:flex-row justify-between gap-10 py-6">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className=" text-richblack-400 font-semibold text-base leading-6 mt-2">
          Your Cart is Empty
        </p>
      )}
    </div>
  );
};

export default Cart;
