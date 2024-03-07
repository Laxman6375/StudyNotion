import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxDropdownMenu } from "react-icons/rx";
import { VscAdd, VscEdit, VscTrash } from "react-icons/vsc";
import { BiSolidDownArrow } from "react-icons/bi";
import SubSectionModal from "./SubSectionModal";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import {
  deleteSection,
  deleteSubSection,
} from "../../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../../slices/courseSlice";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseId: course._id,
      token,
    });
    // console.log(result);
    if (result) {
      dispatch(setCourse(result));
    }
    setConfirmationModal(null);
  };

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({
      subSectionId,
      sectionId,
      token,
    });
    if (result) {
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      );

      const updatedCourse = { ...course, courseContent: updatedCourseContent };
      dispatch(setCourse(updatedCourse));
    }
    setConfirmationModal(null);
  };

  return (
    <div>
      <div className=" rounded-lg bg-richblack-700 px-6 py-3 text-richblack-50 ">
        {course?.courseContent?.map((section) => {
          return (
            <details key={section._id} open>
              <summary className="border-b border-richblack-600 flex items-center justify-between cursor-pointer py-3">
                <div className="flex items-center gap-3">
                  <RxDropdownMenu />
                  <p className=" text-richblack-50 font-semibold text-base leading-6">
                    {section.sectionName}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleChangeEditSectionName(
                        section._id,
                        section.sectionName
                      )
                    }
                  >
                    <VscEdit />
                  </button>

                  <button
                    onClick={() => {
                      setConfirmationModal({
                        text1: "Delete this Section",
                        text2:
                          "All the lectures in this section will be deleted",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handleDeleteSection(section._id),
                        btn2Handler: () => setConfirmationModal(null),
                      });
                    }}
                  >
                    <VscTrash />
                  </button>
                  <span>|</span>
                  <BiSolidDownArrow className={`text-lg text-richblack-300`} />
                </div>
              </summary>

              <div className="flex flex-col ">
                {section.subSection.map((data) => {
                  return (
                    <div
                      key={data?._id}
                      onClick={() => setViewSubSection(data)}
                      className="border-b border-richblack-600 flex items-center  gap-3 w-full pl-6 py-3 cursor-pointer"
                    >
                      <div className=" flex items-center justify-between gap-3 w-full">
                        <div className="flex items-center gap-3">
                          <RxDropdownMenu />
                          <p className=" text-richblack-50 text-sm font-medium leading-5">
                            {data.title}
                          </p>
                        </div>

                        <div
                          onClick={(e) => e.stopPropagation()}
                          className=" flex items-center gap-3"
                        >
                          <button
                            onClick={() =>
                              setEditSubSection({
                                ...data,
                                sectionId: section._id,
                              })
                            }
                          >
                            <VscEdit />
                          </button>
                          <button
                            onClick={() =>
                              setConfirmationModal({
                                text1: "Delete this Sub Section",
                                text2: "Selected Lecture will be Deleted",
                                btn1Text: "Delete",
                                btn2Text: "Cancel",
                                btn1Handler: () =>
                                  handleDeleteSubSection(data._id, section._id),
                                btn2Handler: () => setConfirmationModal(null),
                              })
                            }
                          >
                            <VscTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button
                  className="flex mt-4 items-center gap-2 text-yellow-50 text-base font-medium leading-6"
                  onClick={() => setAddSubSection(section._id)}
                >
                  <VscAdd fontSize={18} />
                  <p>Add Lecture</p>
                </button>
              </div>
            </details>
          );
        })}
      </div>
      {addSubSection ? (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubSection}
          add={true}
        />
      ) : viewSubSection ? (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      ) : editSubSection ? (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection}
          edit={true}
        />
      ) : (
        <div></div>
      )}

      {confirmationModal ? (
        <ConfirmationModal modalData={confirmationModal} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default NestedView;
