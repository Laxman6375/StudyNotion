import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { resetPassword } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { loading } = useSelector((state) => state.auth);
  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };
  return (
    <div className=" relative h-[100vh] mx-4 lg:mx-0 flex justify-center items-center ">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className=" max-w-[500px] lg:p-8 ">
          <div className=" flex flex-col gap-2 mb-6">
            <h1 className=" text-richblack-5 font-semibold text-3xl leading-10">
              Choose New Password
            </h1>
            <p className=" text-richblack-100 text-lg font-normal leading-6">
              Almost done. Enter your new password and youre all set.
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleOnSubmit}>
            <label className="relative">
              <p className=" text-richblack-5 text-sm font-normal leading-6 mb-[6px]">
                New Password <sup className=" text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
                className=" form-style w-full"
              ></input>
              <span
                className=" absolute text-richblack-5 translate-y-[50%] right-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
            <label className="relative">
              <p className=" text-richblack-5 text-sm font-normal leading-6 mb-[2px]">
                Confirm New Password <sup className=" text-pink-200">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
                className=" form-style w-full"
              />
              <span
                className=" absolute text-richblack-5 translate-y-[50%] right-4 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} />
                ) : (
                  <AiOutlineEye fontSize={24} />
                )}
              </span>
            </label>
            <button
              className="yellowButton bg-yellow-50 text-richblack-900 w-full"
              type="Submit"
            >
              Reset Password
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

export default UpdatePassword;
