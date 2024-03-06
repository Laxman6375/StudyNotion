import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";
const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }
  return (
    <div className=" relative h-[100vh] mx-4 lg:mx-0 flex justify-center items-center  ">
      {loading ? (
        <div className="loader relative translate-y-[50%] "></div>
      ) : (
        <div className=" max-w-[500px] lg:p-8  ">
          <div className="flex flex-col gap-3 mb-9">
            <h1 className=" text-richblack-5 font-semibold text-3xl leading-10">
              {!emailSent ? "Reset your Password" : "Check Your Email"}
            </h1>
            <p className=" text-richblack-100 text-lg font-normal leading-6">
              {!emailSent
                ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                : `We have sent the reset email to ${email}`}
            </p>
          </div>
          <form onSubmit={handleOnSubmit} className=" flex flex-col gap-9 ">
            {!emailSent && (
              <label>
                <p className=" text-richblack-5 text-sm font-normal leading-6 mb-[2px]">
                  Email Address <sup className=" text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className=" form-style w-full"
                />
              </label>
            )}

            <button
              className="yellowButton bg-yellow-50 text-richblack-900"
              type="submit"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>
          <div>
            <Link
              to="/login"
              className="flex flex-row items-center text-richblack-5 font-medium text-base leading-6 p-3 gap-2"
            >
              <FaArrowLeftLong width={18} height={18} />
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
