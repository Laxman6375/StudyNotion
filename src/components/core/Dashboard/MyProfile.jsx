import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../../components/common/IconBtn";
import { FaRegEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();


  return (
    <div className=" mb-20">
      <p className="pl-4 lg:pl-10  text-richblack-300 font-normal text-base leading-5 lg:mt-10">
        Home / Dashboard /{" "}
        <span className=" text-yellow-50">My Profile</span>
      </p>
      <h1 className=" pl-4 lg:pl-10 py-6 text-richblack-5 font-semibold text-3xl leading-9 ">
        My Profile
      </h1>

      <div className=" w-11/12 max-w-[62.5rem] flex flex-col gap-6 mx-auto mt-8">
        {/* Section 1 */}
        <div className=" p-3 lg:p-6 flex items-center gap-5 rounded-lg border border-richblack-700 bg-richblack-800">
          <div className="w-[80%] flex items-center gap-6">
            <img
              src={user?.image}
              alt={`profile-${user?.firstName}`}
              className=" aspect-square rounded-full w-16 lg:w-20 object-cover"
            />
            <div>
              <p className=" text-richblack-5 font-semibold text-lg leading-6">
                {user?.firstName + " " + user?.lastName}
              </p>
              <p className=" text-richblack-300 font-normal text-sm lg:text-base leading-5 mt-1 lg:mt-0">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end w-[20%]">
            <IconBtn
              text={"Edit"}
              onClick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <FaRegEdit size={18} />
            </IconBtn>
          </div>
        </div>

        {/* Section 2 */}
        <div className=" p-3 lg:p-6 flex flex-col  gap-5 lg:gap-10 rounded-lg border border-richblack-700 bg-richblack-800">
          <div className=" flex items-center justify-between gap-6">
            <p className=" text-richblack-5 font-semibold text-lg leading-6">
              About
            </p>
            <IconBtn
              text={"Edit"}
              onClick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <FaRegEdit size={18} />
            </IconBtn>
          </div>
          <p className=" text-richblack-300 font-normal text-base leading-5">
            {user
              ? user?.additionalDetails?.about
              : "Write Something about Yourself"}
          </p>
        </div>

        {/* Section 3 */}
        <div className=" p-3 lg:p-6 flex flex-col  gap-6 rounded-lg border border-richblack-700 bg-richblack-800">
          <div className=" flex items-center justify-between gap-6">
            <p className=" text-richblack-5 font-semibold text-lg leading-6">
              Personal Details
            </p>
            <IconBtn
              text={"Edit"}
              onClick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <FaRegEdit size={18} />
            </IconBtn>
          </div>

          <div className=" flex flex-col lg:flex-row items-start lg:items-center">
            <div className=" flex flex-col w-[50%]  gap-5">
              <div>
                <p className=" mb-2 text-richblack-600 font-normal text-base leading-5">
                  FirstName
                </p>
                <p className=" text-richblack-5 font-medium text-sm leading-6">
                  {user?.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-richblack-600 font-normal text-base leading-5">
                  Email
                </p>
                <p className=" text-richblack-5 font-medium text-sm leading-6">
                  {user?.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-richblack-600 font-normal text-base leading-5">
                  Gender
                </p>
                <p className=" text-richblack-5 font-medium text-sm leading-6">
                  {user?.additionalDetails?.gender ?? "Add gender"}
                </p>
              </div>
            </div>

            <div className=" flex flex-col w-[50%]  gap-5">
              <div>
                <p className="mb-2 text-richblack-600 font-normal text-base leading-5">
                  LastName
                </p>
                <p className=" text-richblack-5 font-medium text-sm leading-6">
                  {user?.lastName}
                </p>
              </div>

              <div>
                <p className=" text-richblack-600 font-normal text-base leading-5">
                  Phone Number
                </p>
                <p className="mb-2 text-richblack-5 font-medium text-sm leading-6">
                  {user?.additionalDetails?.contactNumber ??
                    "Add contact number"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-richblack-600 font-normal text-base leading-5">
                  Date of birth
                </p>
                <p className=" text-richblack-5 font-medium text-sm leading-6">
                  {user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
