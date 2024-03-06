const User = require("../models/User");
const mailSender = require("../utils/maileSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//resetPasswordToken
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const {email} = req.body;
    
    //check user for this email, email validation
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your email is not registerd with us",
      });
    }
    //generate token
    const token = crypto.randomBytes(20).toString("hex");
    //update user by adding token and expiration time
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpire: Date.now() + 3600000, //expires in
      },
      { new: true }
    );
    //create url
    const url = `http://localhost:3000/update-password/${token}`;
    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${url}. Please click on this url to reset your password.`
    );
    //return response
    return res.status(200).json({
      success: true,
      message: "Email sent successfully, please check Email and change pwd",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset password mail",
    });
  }
};

//reset Password
exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Passwords do not match",
      });
    }
    //get userDetails from db using token
    const userDetails = await User.findOne({ token: token });
    //if no entry - invalid token
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Invalid Token!",
      });
    }
    //token time check
    if (userDetails.resetPasswordExpires <= Date.now()) {
      return res.json({
        success: false,
        message: "Token Expired! Please request for a new one.",
      });
    }
    //hash password
    const encryptedPassword = await bcrypt.hash(password, 10);
    //password update
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );
    //return response
    return res.status(200).json({
      success: true,
      message: "Password has been updated successfully",
    });
  } catch (error) {
    console.log("Error in Reset Password : ", error);
  }
};
