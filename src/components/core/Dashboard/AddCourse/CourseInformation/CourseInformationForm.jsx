import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";

import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import RequirementField from "./RequirementField";
import IconBtn from "../../../../common/IconBtn";
import { toast } from "react-hot-toast";
import { setStep, setCourse } from "../../../../../slices/courseSlice";
import { COURSE_STATUS } from "../../../../../utils/constants";
import UploadMedia from "./UploadMedia";
import ChipInput from "./ChipInput";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBanefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
    getCategories();
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBanefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseImage !== course.thumbnail ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString()
    )
      return true;
    else return false;
  };

  //handle next button click
  const onSubmit = async (data) => {
     console.log(data)

    if (editCourse) {
      // const currentValues = getValues()
      // console.log("changes after editing form values:", currentValues)
      // console.log("now course:", course)
      // console.log("Has Form Changed:", isFormUpdated())
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();
        // console.log(data)
        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags));
        }
        if (currentValues.courseBanefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBanefits);
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage);
        }
        console.log("Edit Form data: ", formData);
        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          dispatch(setStep(2));
          dispatch(setCourse(result));
        }
      } else {
        toast.error("No changes made to the form");
      }
      return;
    }

    const formData = new FormData();
    formData.append("courseName", data.courseTitle);
    formData.append("courseDescription", data.courseShortDesc);
    formData.append("price", data.coursePrice);
    formData.append("tag", JSON.stringify(data.courseTags));
    formData.append("whatYouWillLearn", data.courseBanefits);
    formData.append("category", data.courseCategory);
    formData.append("status", COURSE_STATUS.DRAFT);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    formData.append("thumbnailImage", data.courseImage);
    setLoading(true);
    const result = await addCourseDetails(formData, token);
    if (result) {
      dispatch(setStep(2));
      dispatch(setCourse(result));
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mb-10 rounded-lg border-richblack-700 bg-richblack-800 p-6"
    >
      <div className=" flex flex-col gap-2 items-start">
        <label
          className=" text-richblack-5 font-normal text-sm leading-5"
          htmlFor="courseTitle"
        >
          Course Title <sup className=" text-pink-200">*</sup>
        </label>
        <input
          id="corseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className=" form-style w-full"
        />
        {errors.courseTitle && (
          <span className=" text-pink-400 font-normal text-sm leading-5">
            Course Title is Required<sup className=" text-pink-200">**</sup>
          </span>
        )}
      </div>
      <div className=" flex flex-col gap-2 items-start">
        <label
          className=" text-richblack-5 font-normal text-sm leading-5"
          htmlFor="courseShortDesc"
        >
          Course Short Description <sup className=" text-pink-200">*</sup>
        </label>
        <textarea
          rows={4}
          cols={50}
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="form-style w-full"
        />
        {errors.courseShortDesc && (
          <span className=" text-pink-400 font-normal text-sm leading-5">
            Course Description is Required
            <sup className=" text-pink-200">**</sup>
          </span>
        )}
      </div>

      <div className="relative flex flex-col gap-2 items-start">
        <label
          className=" text-richblack-5 font-normal text-sm leading-5"
          htmlFor="coursePrice"
        >
          Course Price <sup className=" text-pink-200">*</sup>
        </label>

        <input
          id="corsePrice"
          placeholder="Enter Course Price"
          {...register("coursePrice", {
            required: true,
            valueAsNumber: true,
          })}
          className=" form-style pl-10 w-full"
        />
        <HiOutlineCurrencyRupee
          fontSize={30}
          className=" absolute top-7 ml-1 mt-2 text-richblack-500"
        />

        {errors.coursePrice && (
          <span className=" text-pink-400 font-normal text-sm leading-5">
            Course Price is Required<sup className=" text-pink-200">**</sup>
          </span>
        )}
      </div>

      <div className=" flex flex-col gap-2 items-start">
        <label
          className=" text-richblack-5 font-normal text-sm leading-5"
          htmlFor="courseCategory"
        >
          Course Category<sup className=" text-pink-200">*</sup>
        </label>
        <select
          className=" form-style w-full"
          id="courseCategory"
          defaultValue=""
          {...register("courseCategory", { required: true })}
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            courseCategories.map((category, i) => {
              return (
                <option className=" form-style" key={i} value={category._id}>
                  {category?.name}
                </option>
              );
            })}
        </select>
        {errors.courseCategory && (
          <span className=" text-pink-400 font-normal text-sm leading-5">
            Course Category is Required<sup className=" text-pink-200">**</sup>
          </span>
        )}
      </div>

      {/* Create a custom component for handling tags input */}
      <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter tags and press enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValue={getValues}
      />

      {/* create a component for uploading and showing preview of media */}
      <UploadMedia
        label="Course Thumbnail"
        name="courseImage"
        register={register}
        errors={errors}
        setValue={setValue}
      />

      {/* Banefits of the course */}
      <div className=" flex flex-col gap-2 items-start">
        <label
          className=" text-richblack-5 font-normal text-sm leading-5"
          htmlFor="coursebenefits"
        >
          Banefits of the course <sup className=" text-pink-200">*</sup>
        </label>
        <textarea
          placeholder="Enter Banefits of the course"
          className=" form-style w-full"
          id="coursebenefits"
          {...register("courseBanefits", { required: true })}
          rows={4}
          cols={50}
        />
        {errors.courseBanefits && (
          <span className=" text-pink-400 font-normal text-sm leading-5">
            Banefits of the course are required
            <sup className=" text-pink-200">**</sup>
          </span>
        )}
      </div>

      <RequirementField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValue={getValues}
      />

      <div className=" flex flex-col gap-2 items-end">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            className="yellowButton yellowButton bg-pure-greys-500 text-richblack-5"
          >
            Continue Without Saving
          </button>
        )}

        <IconBtn text={!editCourse ? "Next" : "Save Changes"}
        >
          <FaRegEdit size={18} />
        </IconBtn>
      </div>
    </form>
  );
};

export default CourseInformationForm;
