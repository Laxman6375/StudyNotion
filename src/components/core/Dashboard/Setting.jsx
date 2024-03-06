import React from "react";
import ChangeProfilePicture from "./Settings/ChangeProfilePicture";
import EditProfile from "./Settings/EditProfile";
import UpdatePassword from "./Settings/UpdatePassword";
import DeleteAccount from "./Settings/DeleteAccount";

const Setting = () => {
  return (
    <div className=" mb-20">
      <p className="pl-4 lg:pl-10  text-richblack-300 font-normal text-base leading-5 lg:mt-10">
        Home / Dashboard / <span className=" text-yellow-50">Edit Profile</span>
      </p>
      <h1 className=" pl-4 lg:pl-10 py-6 text-richblack-5 font-semibold text-3xl leading-9 ">
        Edit Profile
      </h1>

      <ChangeProfilePicture />
      <EditProfile />
      <UpdatePassword />
      <DeleteAccount />
    </div>
  );
};

export default Setting;
