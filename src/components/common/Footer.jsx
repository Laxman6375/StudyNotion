import React from "react";

import MainLogo from "../../assets/Logo/Logo-Full-Light.png";
import { FooterLink2 } from "../../data/footer-links";

// Icons
import { FaTwitter, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const company = ["About", "Careers", "Affiliates"];

const Resources = [
  "Articals",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Worspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];
const privacyPolicy = ["Privacy Policy", "Cookie Policy", "Terms"];

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-richblack-800 px-4 py-8 lg:py-[52px] border-t-[1px] border-solid border-t-richblack-600 pb-16 lg:pb-0">
      <div className=" flex flex-wrap lg:flex-nowrap flex-row justify-between gap-6 lg:gap-[52px] w-11/12 max-w-maxContent mx-auto border-b-[1px] border-richblack-700 pb-8">
        <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-3 w-full lg:w-[50%] lg:justify-between lg:border-r-[1px] lg:border-richblack-700">
          <div className="flex flex-col lg:gap-3 lg:text-start w-[42%] lg:w-[30%]">
            <img src={MainLogo} alt="mainlogo" />
            <div className="flex flex-col gap-3">
              <p className=" text-base font-semibold text-richblack-100 leading-6">
                Company
              </p>
              <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
                {company.map((ele, index) => {
                  return (
                    <Link
                      to={ele.split(" ").join("-").toLocaleLowerCase()}
                      key={index}
                      className=" hover:text-richblack-5 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3 text-richblack-400 text-2xl">
              <FaFacebook />
              <FaGoogle />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>

          <div className="flex flex-col gap-9 w-[50%] lg:w-[30%]">
            <div className="flex flex-col gap-3">
              <p className=" text-base font-semibold text-richblack-100 leading-6">
                Resources
              </p>
              <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
                {Resources.map((ele, index) => {
                  return (
                    <Link
                      to={ele.split(" ").join("-").toLocaleLowerCase()}
                      key={index}
                      className=" hover:text-richblack-5 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className=" text-base font-semibold text-richblack-100 leading-6">
                Support
              </p>
              <Link
                to={"help-center"}
                className=" text-richblack-400 leading-6 text-sm font-normal hover:text-richblack-5 transition-all duration-200"
              >
                Help Center
              </Link>
            </div>
          </div>

          <div className="flex flex-row  lg:flex-col gap-6 lg:gap-9 w-full mb-6 lg:mb-0 lg:w-[30%]">
            <div className="flex flex-col gap-3 w-[42%]">
              <p className=" text-base font-semibold text-richblack-100 leading-6">
                Plans
              </p>
              <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
                {Plans.map((ele, index) => {
                  return (
                    <Link
                      to={ele.split(" ").join("-").toLocaleLowerCase()}
                      key={index}
                      className=" hover:text-richblack-5 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[50%]">
              <p className=" text-base font-semibold text-richblack-100 leading-6">
                Community
              </p>
              <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
                {Community.map((ele, index) => {
                  return (
                    <Link
                      to={ele.split(" ").join("-").toLocaleLowerCase()}
                      key={index}
                      className=" hover:text-richblack-5 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-3 justify-between w-full lg:w-[50%] ">
          <div className="flex flex-col gap-3 text-start w-[42%] lg:w-[30%]">
            <p className=" font-semibold text-base text-richblack-100 leading-6">
              {FooterLink2[0].title}
            </p>
            <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
              {FooterLink2[0].links.map((ele, index) => {
                return (
                  <Link
                    to={ele.link}
                    key={index}
                    className=" hover:text-richblack-5 transition-all duration-200"
                  >
                    {ele.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-start w-[50%] lg:w-[30%]">
            <p className=" font-semibold text-base text-richblack-100 leading-6">
              {FooterLink2[1].title}
            </p>
            <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
              {FooterLink2[1].links.map((ele, index) => {
                return (
                  <Link
                    to={ele.link}
                    key={index}
                    className=" hover:text-richblack-5 transition-all duration-200"
                  >
                    {ele.title}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-start w-[30%]">
            <p className=" font-semibold text-base text-richblack-100 leading-6">
              {FooterLink2[2].title}
            </p>
            <div className="flex flex-col gap-2 text-richblack-400 leading-6 text-sm font-normal">
              {FooterLink2[2].links.map((ele, index) => {
                return (
                  <Link
                    to={ele.link}
                    key={index}
                    className=" hover:text-richblack-5 transition-all duration-200"
                  >
                    {ele.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row gap-3 justify-between  w-11/12 max-w-maxContent mx-auto">
        <div className="flex  items-center justify-center lg:justify-start w-full lg:w-[60%] ">
          {privacyPolicy.map((ele, index) => {
            return (
              <div
                key={index}
                className={`${
                  index !== privacyPolicy.length - 1
                    ? "border-r-[1px] border-richblack-600"
                    : " border-r-none"
                } `}
              >
                <Link
                  to={ele.split(" ").join("-").toLocaleLowerCase()}
                  className=" text-richblack-300 text-sm font-normal leading-6 hover:text-richblack-5 transition-all duration-200 px-3"
                >
                  {ele}
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" text-sm text-richblack-300 text-center lg:text-start leading-6 font-normal">
          Made with ❤️ By Laxman Suthar
        </div>
      </div>
    </div>
  );
};

export default Footer;
