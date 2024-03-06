import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { VscClose } from "react-icons/vsc";
import {
  createSubSection,
  updateSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";
import UploadMedia from "../../../../core/Dashboard/AddCourse/CourseInformation/UploadMedia";
import IconBtn from "../../../../common/IconBtn";

const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title);
      setValue("lectureDesc", modalData.description);
      setValue("lectureVideo", modalData.videoUrl);
    }
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
     //console.log("changes after editing form values:", currentValues)
    if (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleEditSubSection = async () => {
    const currentValues = getValues();
    const formData = new FormData();

    formData.append("sectionId", modalData.sectionId);
    formData.append("subSectionId", modalData._id);

    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle);
    }

    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc);
    }

    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("video", currentValues.lectureVideo);
    }

    setLoading(true);
    //api call
    const result = await updateSubSection(formData, token);
    if (result) {
      //todo:same check
       const updatedCourseContent = course.courseContent.map((section) =>
         section._id === modalData.sectionId ? result : section
       );

       const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }
    setModalData(null);
    setLoading(false);
  };

  const onSubmit = async (data) => {
    // console.log(data)
    if (view) return;

    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form");
      } else {
        handleEditSubSection();
      }
      return;
    }

    const formData = new FormData();
    formData.append("sectionId", modalData);
    formData.append("title", data.lectureTitle);
    formData.append("description", data.lectureDesc);
    formData.append("video", data.lectureVideo);
    setLoading(true);
    const result = await createSubSection(formData, token);
    if (result) {
      // update the structure of course
       const updatedCourseContent = course.courseContent.map((section) =>
         section._id === modalData ? result : section
       );

       const updatedCourse = { ...course, courseContent: updatedCourseContent };

      dispatch(setCourse(updatedCourse));
    }
    setModalData(null);
    setLoading(false);
  };
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className=" bg-richblack-800 w-[39%] rounded-lg ">
        <div className=" bg-richblack-700 border-b border-richblack-600 flex px-6 py-4 items-center gap-3 justify-between rounded-t-lg ">
          <p className=" text-white font-semibold text-lg leading-6">
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </p>
          <button
            className=" text-richblack-50 font-bold "
            onClick={() => (!loading ? setModalData(null) : {})}
          >
            <VscClose fontSize={24} />
          </button>
        </div>

        <form
          className=" p-8 flex flex-col gap-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <UploadMedia
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />

          <div className=" flex flex-col gap-2 items-start">
            <label
              className=" text-richblack-5 font-normal text-sm leading-5"
              htmlFor="lectureTitle"
            >
              Lecture Title <sup className=" text-pink-200">*</sup>
            </label>
            <input
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="form-style w-full"
            />
            {errors.lectureTitle && (
              <span>
                Lecture Title is required <sup>**</sup>
              </span>
            )}
          </div>

          <div className=" flex flex-col gap-2 items-start">
            <label
              className=" text-richblack-5 font-normal text-sm leading-5"
              htmlFor="lectureDesc"
            >
              Lecture Description <sup className=" text-pink-200">*</sup>
            </label>
            <textarea
              id="lectureDesc"
              placeholder="Enter Description"
              {...register("lectureDesc", { required: true })}
              className="form-style w-full"
            />
            {errors.lectureDesc && (
              <span>
                Lecture Description is required <sup>**</sup>
              </span>
            )}
          </div>

          {!view && (
            <div>
              <IconBtn text={edit ? "Save Changes" : "Save"} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubSectionModal;
