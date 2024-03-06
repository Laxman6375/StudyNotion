import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";
import countryCode from "../../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("DATA:", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Loging Response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(
        {
          email: "",
          firstName: "",
          lastName: "",
          message: "",
          phoneNo: "",
        },
        [reset, isSubmitSuccessful]
      );
    }
  });
  return (
    <form className=" w-full" onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-9 ">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* firstName */}
            <div className="flex flex-col gap-[6px] lg:w-[50%]">
              <label
                className=" text-richblack-5 text-sm font-normal leading-5"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
                {...register("firstName")}
                className="form-style"
              />
            </div>

            {/* Lastname */}
            <div className="flex flex-col gap-[6px] lg:w-[50%]">
              <label
                className=" text-richblack-5 text-sm font-normal leading-5"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
                {...register("lastName", { required: true })}
                className="form-style"
              />
              {errors.lastName && <span>Please Enter Your Name</span>}
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-[6px] ">
            <label
              className=" text-richblack-5 text-sm font-normal leading-5"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
              {...register("email", { required: true })}
              className="form-style "
            />
            {errors.email && <span>Please enter Your email address</span>}
          </div>

          {/* phone number */}
          <div className="flex flex-col gap-[6px] ">
            <label
              className=" text-richblack-5 text-sm font-normal leading-5"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="flex gap-5 items-center ">
              {/* dropdown */}
              <div className=" w-[28%] lg:w-[16%]">
                <select
                  name="dropdown"
                  id="dropdown"
                  {...register("countrycode", { required: true })}
                  className="form-style w-[100%]"
                >
                  {countryCode.map((data, index) => {
                    return (
                      <option  key={index} value={data.code}>
                        {data.code}  - {data.country}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className=" lg:w-[84%]">
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="12345 67890"
                  {...register("phoneNo", {
                    required: {
                      value: true,
                      message: "Please Enter Your Phone Number",
                    },
                    maxLength: { value: 10, message: "Invalid Phone Number" },
                    minLength: { value: 8, message: "Invalid Phone Number" },
                  })}
                  className="form-style  w-full"
                />
              </div>
            </div>
            {
              errors.phoneNo && (
                <span>
                  {
                    errors.phoneNo.message
                  }
                </span>
              )
            }
          </div>
        </div>

        {/* Message Box */}
        <div className="flex flex-col gap-[6px]">
          <label
            className=" text-richblack-5 text-sm font-normal leading-5"
            htmlFor="messageBox"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="7"
            placeholder="Enter Your Message Here"
            {...register("message", { required: true })}
            className="form-style"
          />
          {errors.message && <span>Please Enter Your Message</span>}
        </div>

        <button
          className="yellowButton bg-yellow-50 text-richblack-900"
          type="Submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
