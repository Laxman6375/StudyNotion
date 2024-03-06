import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/* Section 1*/}
      <div className="relative px-4 lg:px-0  lg:mx-auto flex flex-col    lg:w-11/12 max-w-maxContent items-start sm:items-center md:items-center lg:items-center text-white justify-between">
        <Link to="/signup">
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none transition-all duration-200 hover:scale-95 w-fit ">
            <div className=" flex flex-row  items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p className=" text-base">Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className=" text-start sm:text-center md:text-center  lg:text-center text-4xl font-semibold leading-10 mt-7 ">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-full sm:w-[81%] md:w-[81%] lg:w-[81%] text-start lg:text-center text-lg leading-6 font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row items-center justify-center  gap-7 mt-8 mx-auto">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className=" mx-3 my-12 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code section 1*/}
        <div>
          <CodeBlocks
            position={" lg:flex-row"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential"} /> <br /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={" text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code section 2*/}
        <div>
          <CodeBlocks
            position={" lg:flex-row-reverse"}
            heading={
              <div className=" text-4xl font-semibold">
                Start
                <HighlightText text={`coding `} /> <br />
                <HighlightText text={` in seconds`} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`import React from "react";
            import CTAButton from "./Button";
            import { FaArrowRight } from "react-icons/fa";
            
            const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home;`}
            codeColor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        <ExploreMore />
      </div>

      {/* Section 2*/}
      <div className=" bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px] mt-8 lg:mt-0">
          <div className=" w-11/12 max-w-maxContent flex  flex-col  justify-between items-center gap-5 mx-auto">
            <div className=" h-10 lg:h-[180px] "></div>
            <div className=" flex flex-row  gap-3 lg:gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex flex-row items-center gap-3 ">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className=" mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 lg:py-[90px]">
          <div className="flex flex-col lg:flex-row gap-3 justify-between">
            <div className=" w-full lg:w-[45%] text-4xl text-richblack-900 font-semibold">
              Get the skills you need for a
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className=" flex flex-col gap-10 w-full lg:w-[40%] items-start">
              <div className=" text-base text-richblack-700 leading-6">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3*/}
      <div className=" w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h2 className=" text-center text-4xl font-semibold mt-10">
          Reviews from other learners
        </h2>
        {/* Review Slider here */}
        <ReviewSlider/>
      </div>
      
    </div>
  );
};

export default Home;
