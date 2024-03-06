import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import ReviewSlider from "../components/common/ReviewSlider";

const About = () => {
  return (
    <div>
      {/* section 1 */}
      <section className=" h-[630px] lg:h-[580px] pt-[80px] bg-richblack-700">
        <div className=" lg:w-11/12 max-w-maxContent flex flex-col justify-center items-center gap-[52px]  mx-auto">
          <div className=" flex flex-col justify-center items-center gap-9">
            <div className=" text-richblack-200 text-base font-medium leading-6 text-center">
              About Us
            </div>
            <div className=" lg:w-[80%] flex flex-col justify-center items-center gap-4 ">
              <header className=" lg:w-[75%] text-center text-richblack-5 text-4xl font-semibold mx-4 lg:mx-0 leading-[44px]">
                Driving Innovation in Online Education for a{" "}
                <HighlightText text={"Brighter Future"} />
              </header>
              <p className="w-[82%] tracking-wider text-richblack-300 text-base font-medium leading-6  text-center mb-5 lg:mb-0">
                Studynotion is at the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </p>
            </div>
          </div>
          <div className=" w-[26%] lg:w-full flex mx-auto justify-center items-center gap-6">
            <img src={BannerImage1} alt="BanneImage" />
            <img src={BannerImage2} alt="BanneImage" />
            <img src={BannerImage3} alt="BanneImage" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="lg:w-11/12 max-w-maxContent mx-auto ">
          <div className=" hidden lg:block lg:h-[100px]"></div>
          <div className=" py-[90px] text-center text-richblack-100 text-xl lg:text-4xl font-semibold mx-4 lg:mx-0 lg:leading-[52px] ">
            <Quote />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="lg:w-11/12 max-w-maxContent mx-auto">
          {/* founding story wala box */}
          <div className="mx-4 lg:mx-0 flex flex-col lg:flex-row justify-between items-center gap-[98px] py-[90px] ">
            {/* founding story left box */}
            <div className=" lg:w-[50%] flex flex-col items-start gap-6 ">
              <h1 className=" bg-gradient-to-b from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text text-4xl font-bold">
                Our Founding Story
              </h1>
              <div className="flex flex-col gap-4">
                <p className="  font-medium text-base leading-6 text-richblack-300 lg:w-[75%]">
                  Our e-learning platform was born out of a shared vision and
                  passion for transforming education. It all began with a group
                  of educators, technologists, and lifelong learners who
                  recognized the need for accessible, flexible, and high-quality
                  learning opportunities in a rapidly evolving digital world.
                </p>
                <p className="  font-medium text-base leading-6 text-richblack-300 lg:w-[72%]">
                  As experienced educators ourselves, we witnessed firsthand the
                  limitations and challenges of traditional education systems.
                  We believed that education should not be confined to the walls
                  of a classroom or restricted by geographical boundaries. We
                  envisioned a platform that could bridge these gaps and empower
                  individuals from all walks of life to unlock their full
                  potential.
                </p>
              </div>
            </div>

            {/* founding story right box  */}
            <div className=" mx-4 lg:mx-0">
              <img
                src={FoundingStory}
                className=" shadow-[0_0_20px_0] shadow-[#FC6767]"
                alt="FoundingStory"
              />
            </div>
          </div>

          {/* vision and mission wala parent div */}
          <div className="mx-4 lg:mx-0 flex flex-col lg:flex-row  justify-between items-center gap-[98px] py-[90px] text-white ">
            {/* left box */}
            <div className=" lg:w-[40%] flex items-start flex-col gap-6">
              <h1 className="bg-gradient-to-b from-[#E65C00]  to-[#F9D423] text-transparent bg-clip-text text-4xl font-bold">
                Our Vision
              </h1>
              <p className=" font-medium text-base leading-6 text-richblack-300 lg:w-[90%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* right box */}
            <div className=" lg:w-[40%] flex items-start flex-col gap-6">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-bold">
                Our Mission
              </h1>
              <p className=" font-medium text-base leading-6 text-richblack-300 lg:w-[90%]">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className=" bg-richblack-800 border-b border-richblack-700">
        <Stats />
      </section>

      {/* section 5 */}
      <section className="lg:w-11/12 max-w-maxContent mx-auto ">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
    </div>
  );
};

export default About;
