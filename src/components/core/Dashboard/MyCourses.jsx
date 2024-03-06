import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import IconBtn from "../../common/IconBtn";
import { VscAdd } from "react-icons/vsc";
import CoursesTable from "./InstructorCourses/CoursesTable";
import { GrAddCircle } from "react-icons/gr";

const MyCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) {
        setCourses(result);
      }
    };
    fetchCourses();
  }, []);
  return (
    <div className=" text-white mx-auto w-11/12 max-w-[62.5rem] mt-10">
      <div className=" flex justify-between">
        <h1 className=" text-richblack-5 font-semibold text-3xl leading-9">
          My Courses
        </h1>
        <IconBtn
          text={"Add Course"}
          onClick={() => navigate("/dashboard/add-course")}
        >
          <GrAddCircle fontSize={18} />
        </IconBtn>
      </div>

      {courses && <CoursesTable courses={courses} setCourses={setCourses} />}
    </div>
  );
};

export default MyCourses;
