import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";

const VerifyEmail = () => {
  const { signupData, loading } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div className=" relative  flex justify-center items-center min-h-[calc(100vh-3.5rem)] ">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className=" mx-5 lg:mx-0 lg:max-w-[500px] lg:p-8  ">
          <div className="flex flex-col gap-3 mb-6">
            <h1 className=" text-richblack-5 font-semibold text-3xl leading-10">
              Verify Email
            </h1>
            <p className=" text-richblack-100 text-lg font-normal leading-6">
              A verification code has been sent to you. Enter the code below
            </p>
          </div>
          <form onSubmit={handleOnSubmit} className=" flex flex-col gap-6 ">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className=" w-full h-full p-3 border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 20px",
              }}
            />
            <button
              className="yellowButton bg-yellow-50 text-richblack-900"
              type="Submit"
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between">
            <div>
              <Link
                to="/login"
                className="flex flex-row items-center text-richblack-5 font-medium text-base leading-6 p-3 gap-2"
              >
                <FaArrowLeftLong width={18} height={18} />
                <p>Back to Login</p>
              </Link>
            </div>
            <button
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              className="flex flex-row items-center text-blue-100 font-medium text-base leading-6 p-3 gap-2"
            >
              <MdHistory width={18} height={18} />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
