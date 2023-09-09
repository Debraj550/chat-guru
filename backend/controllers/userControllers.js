const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    req.status(400);
    throw new error("Please enter all the fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    req.status(400);
    throw new error("User already exists");
  }

  const user = await new User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    req.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    req.status(400);
    throw new error("User creation failed");
  }
});

module.exports = { registerUser };
