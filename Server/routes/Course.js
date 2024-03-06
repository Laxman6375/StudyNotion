//import the required modules
const express = require("express");
const router = express.Router();

//Import the controllers

//Course controllers import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course");

//Categories Controllers import
const {
  showAllCategory,
  createCategory,
  categoryPageDetails,
} = require("..//controllers/Category");

//Section Controllers import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

//Sub-Section controllers import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/SubSection");

//Rating Controllers import
const {
  createRating,
  getAverageRating,
  getAllRatings,
} = require("../controllers/RatingAndReviews");

const { updateCourseProgress } = require("../controllers/courseProgress");

//Import Middlewares
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middleware/auth");

//*********************************************************************************************** *****************************/
//                                Course routes
//****************************************************************************************************************** */

//Course can Onl be Created by Instructor
router.post("/createCourse", auth, isInstructor, createCourse);
//Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection);
//Update a Section
router.post("/updateSection", auth, isInstructor, updateSection);
//Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
//Edit Sub Section
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
//Delete sub section
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
//Add a sub Section to a section
router.post("/addSubSection", auth, isInstructor, createSubSection);
//Get all Registered Course
router.post("/getAllCourse", getAllCourses);
//Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails)
// Edit Course routes
router.post("/editCourse", auth, isInstructor, editCourse)
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)

router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
//Category can Only be Created by Admin
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRatings);


module.exports = router;
