import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../../../common/IconBtn";
import { resetCourseState, setStep } from "../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../utils/constants";
import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI";

const PublishCourse = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);

  const goToCourses = () => {
    dispatch(resetCourseState());
    //navigate("/dashboard/my-courses")
  };
  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true);
    }
  }, []);

  const handleCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (course.status === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      //no updation in form
      //no need to make api call
      goToCourses();
      return;
    }
    //if form is updated
    const formData = new FormData();
    formData.append("courseId", course._id);
    const courseStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT;
    formData.append("status", courseStatus);

    setLoading(true);
    const result = await editCourseDetails(formData, token);

    if (result) {
      goToCourses();
    }
    setLoading(false);
  };
  const onSubmit = () => {
    handleCoursePublish();
  };
  const goBack = () => {
    dispatch(setStep(2));
  };

  return (
    <div className=" text-white rounded-md border bg-richblack-800 p-6 border-richblack-700">
      <p className=" text-richblack-5 font-semibold text-2xl leading-9 mb-6">
        Publish Course
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className=" flex gap-2 items-center" htmlFor="public">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className=" h-4 w-4"
            />
            <span className=" text-richblack-400 font-medium text-base leading-6"> Make this Course as Public</span>
          </label>
        </div>

        <div className=" flex gap-3 items-center justify-end mt-10">
          <button
            className=" bg-pure-greys-300 rounded-lg cursor-pointer flex items-center px-4 py-2 text-richblack-25"
            disabled={loading}
            type="button"
            onClick={goBack}
          >
            Back
          </button>
          <IconBtn disabled={loading} text={"save changes"} />
        </div>
      </form>
    </div>
  );
};

export default PublishCourse;
