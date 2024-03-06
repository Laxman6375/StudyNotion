const express = require("express");
const router = express.Router();

const {
  login,
  signUp,
  sendOTP,
  changePassword,
} = require("../controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middleware/auth");

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

//Router for user login
router.post("/login", login);

//Route for user signup
router.post("/signup", signUp);

//router for sending otp to the user's email
router.post("/sendotp", sendOTP);

//router for changing the password
router.post("/changepassword", auth, changePassword);

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

//Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

//Router for resetting user's password after verification
router.post("/reset-password", resetPassword);

module.exports = router;
