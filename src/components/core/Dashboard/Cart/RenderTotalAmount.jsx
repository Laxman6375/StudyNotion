import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../common/IconBtn";
import { useNavigate } from "react-router-dom";
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI";

const RenderTotalAmount = () => {
  const { total } = useSelector((state) => state.cart);
  const { cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    const courseId = cart.map((course) => course._id);
    console.log("Bought these course:", courseId);
    //Todo: api integrates => handle api payment gateway
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=" h-[11.6rem] lg:w-[25%] p-6 flex flex-col items-start gap-4 rounded-lg border border-richblack-700 bg-richblack-800 ">
      <div className="flex flex-col gap-1">
        <p className=" text-richblack-200 font-semibold text-sm leading-5">
          Total:
        </p>
        <p className=" text-yellow-50 font-semibold text-2xl leading-8">
          Rs {total}
        </p>
        <p className=" line-through text-richblack-300 text-sm font-normal leading-5">
          Rs {total + Math.round((total / 100) * 30)}
        </p>
      </div>

      <div className=" w-full">
        <IconBtn
          text={"Buy Now"}
          onClick={handleBuyCourse}
          customClasses={" w-full justify-center"}
        />
      </div>
    </div>
  );
};

export default RenderTotalAmount;
