import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../common/IconBtn";
import { GrAddCircle, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { GrFormNext } from "react-icons/gr";
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice";
import toast from "react-hot-toast";
import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [editSectionName, setEditSectionName] = useState(null);
  const { course } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const cancelEdit = () => {
    setEditSectionName(null);
    setValue("sectionName", "");
  };

  const goToNext = () => {
    if (course.courseContent === 0) {
      toast.error("Please add atleast one Section");
      return;
    }
    if (
      course.courseContent.some((section) => section.subSection.length === 0)
    ) {
      toast.error("Please add atleast one lecture in each section");
      return;
    }

    //if everything is good
    dispatch(setStep(3));
  };
  const goBack = () => {
    dispatch(setStep(1));
    dispatch(setEditCourse(true));
  };

  const onSubmit = async (data) => {
    // console.log(data)
    setLoading(true);

    let result;

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      );
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      );
      console.log("create", result);
    }
    if (result) {
      //console.log("section result", result)
      dispatch(setCourse(result));
      setEditSectionName(null);
      setValue("sectionName", "");
    }
    setLoading(false);
  };

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit();
      return;
    }
    setEditSectionName(sectionId);
    setValue("sectionName", sectionName);
  };

  return (
    <div className=" p-6 flex flex-col border border-richblack-800 rounded-lg bg-richblack-800 mb-10 text-white">
      <p className=" text-richblack-5 font-semibold text-2xl leading-9 mb-6">
        Course Builder
      </p>

      <form className=" flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-2 items-start">
          <label
            className=" text-richblack-5 font-normal text-sm leading-5"
            htmlFor="sectionName"
          >
            Section name <sup className=" text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="form-style w-full"
          />
          {errors.sectionName && (
            <span className=" text-pink-400 font-normal text-sm leading-5">
              Section Name is Required<sup className=" text-pink-200">**</sup>
            </span>
          )}
        </div>

        <div className="flex gap-2 w-full items-end mb-10">
          <IconBtn
            type="submit"
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
            customClasses={"text-yellow-50"}
          >
            <GrAddCircle size={18} />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className=" text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {course.courseContent.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}

      <div className="flex justify-end gap-3 mt-10">
        <button
          onClick={goBack}
          className=" bg-pure-greys-400 rounded-lg cursor-pointer flex items-center gap-2 justify-center px-4 py-2 text-richblack-5"
        >
          <GrFormPrevious size={18} />
          Back
        </button>
        <IconBtn text="Next" onClick={goToNext}>
          <GrFormNext size={18} />
        </IconBtn>
      </div>
    </div>
  );
};

export default CourseBuilderForm;
