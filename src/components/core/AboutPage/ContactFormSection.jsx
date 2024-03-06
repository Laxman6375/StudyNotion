import React from "react";
import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className=" flex flex-col gap-8 lg:w-[600px] pt-[90px] mx-auto ">
      <div className="flex flex-col gap-3">
        <h1 className=" text-richblack-5 text-center font-semibold text-4xl leading-10">Get in Touch</h1>
        <p className=" text-richblack-300 text-center font-medium text-base leading-6">We'd love to here for you, Please fill out this form.</p>
      </div>

      <div className=" p-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
