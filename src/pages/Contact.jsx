import React from "react";
import ContactDetails from "../components/core/ContactUsForm/ContactDetails";
import ContactUsForm from "../components/core/ContactUsForm/ContactUsForm";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Contact = () => {
  return (
    <div>
      <div className="lg:w-11/12 max-w-maxContent mx-auto  my-[90px] flex flex-col lg:flex-row gap-[52px]">
        <div className=" mx-4 lg:mx-0 lg:w-[40%]">
          <ContactDetails />
        </div>

        <div className=" mx-4 lg:mx-0 flex flex-col p-5 lg:p-[52px] lg:w-[60%] gap-8 rounded-xl border border-richblack-600">
          <div className="flex flex-col gap-3">
            <h1 className=" text-richblack-5  font-semibold text-4xl leading-10">
              Got a Idea? We’ve got the skills. Let’s team up
            </h1>
            <p className=" text-richblack-300  font-medium text-base leading-6">
              Tall us more about yourself and what you’re got in mind.
            </p>
          </div>
          <ContactUsForm />
        </div>
      </div>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
