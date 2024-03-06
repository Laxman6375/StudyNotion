import React from "react";

const Quote = () => {
  return (
    <div>
      <span className=" text-xl lg:text-4xl text-richblack-600">"</span>
      We are passionate about revolutionizing the way we learn. Our innovative
      platform{" "}
      <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text lg:text-4xl font-bold">
        combines technology
      </span>
      <span className="bg-gradient-to-b from-[#FF512F]  to-[#F09819] text-transparent bg-clip-text lg:text-4xl font-bold">
        {" "}
        expertise
      </span>
      , and community to create an
      <span className="bg-gradient-to-b from-[#E65C00]  to-[#F9D423] text-transparent bg-clip-text lg:text-4xl font-bold">
        {" "}
        unparalleled educational experience.
      </span>
      <span className=" text-xl lg:text-4xl text-richblack-600">"</span>
    </div>
  );
};

export default Quote;
