import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { COURSE_STATUS } from "../../../../utils/constants";
import { VscEdit, VscTrash } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../../common/ConfirmationModal";
import {
  deleteCourse,
  fetchInstructorCourses,
} from "../../../../services/operations/courseDetailsAPI";
import { setCourse } from "../../../../slices/courseSlice";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { formatDate } from "../../../../services/formatDate";
import { HiMiniClock } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

const CoursesTable = ({ courses, setCourses }) => {
  // console.log("corses length", courses.length - 1);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();

  const handleCorseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };
  return (
    <div className=" border  border-richblack-600  mt-6 rounded-lg mb-10">
      <Table className="">
        <Thead>
          <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-600 px-10 py-2 text-richblack-100">
            <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
              Courses
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Price
            </Th>
            <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Actions
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses.length === 0 ? (
            <Tr>
              <Td>No Courses Found</Td>
            </Tr>
          ) : (
            courses?.map((course, index) => {
              return (
                <Tr
                  key={course._id}
                  className={`${
                    index === courses.length - 1
                      ? ""
                      : "border-b border-richblack-600"
                  } flex items-center gap-10 justify-between p-4`}
                >
                  <Td colSpan={1} className=" flex flex-1 gap-6 p-3">
                    <img
                      src={course?.thumbnail}
                      alt="thumbnailimage"
                      className=" md:h-[148px] md:w-[13.8rem]  aspect-video rounded-lg object-cover"
                    />
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className=" text-richblack-5 font-semibold text-xl leading-7 mt-4 lg:mt-0">
                          {course.courseName}
                        </p>
                        <p className=" overflow-hidden text-richblack-100 text-ellipsis whitespace-nowrap text-sm font-normal leading-5 mt-1">
                          {course.courseDescription}
                        </p>
                      </div>
                      <p className=" text-richblack-25 font-medium text-sm leading-5">
                        Created: {formatDate(course.createdAt)}{" "}
                      </p>
                      {course.status === COURSE_STATUS.DRAFT ? (
                        <div className=" w-[6.5rem] py-1 px-2 flex gap-[6px] items-center justify-center text-pink-200 bg-richblack-700 rounded-full">
                          <HiMiniClock fontSize={20} />
                          <p className=" text-sm font-medium leading-5">
                            DRAFTED
                          </p>
                        </div>
                      ) : (
                        <div className=" w-[7.5rem] py-1 px-2 flex gap-[6px] items-center justify-center text-yellow-50 bg-richblack-700 rounded-full">
                          <FaCheckCircle fontSize={16} />
                          <p className=" text-sm font-medium leading-5">
                            PUBLISHED
                          </p>
                        </div>
                      )}
                    </div>
                  </Td>

                  <Td className=" text-richblack-100 text-sm font-medium leading-5 mr-4 mb-4 lg:mb-0">
                    <div>₹{course.price}</div>
                  </Td>

                  <Td className="flex gap-4 mr-4 ">
                    <button
                      disabled={loading}
                      onClick={() =>
                        navigate(`/dashboard/edit-course/${course._id}`)
                      }
                      className="px-1 lg:px-0 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                    >
                      <VscEdit fontSize={20} />
                    </button>
                    <button
                      disabled={loading}
                      className="px-1 lg:px-0 transition-all duration-200 hover:scale-110 hover:text-pink-400"
                      onClick={() => {
                        setConfirmationModal({
                          text1: "Do you want to Delete this course?",
                          text2:
                            "All the data related to this course will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: !loading
                            ? () => handleCorseDelete(course._id)
                            : () => {},
                          btn2Handler: !loading
                            ? () => setConfirmationModal(null)
                            : () => {},
                        });
                      }}
                    >
                      <VscTrash fontSize={20} />
                    </button>
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default CoursesTable;
