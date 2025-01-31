const User = require("../../models/User.js");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { userName, userEmail, password, role } = req.body;

  const existingUser = await User.findOne({
    $or: [{ userName }, { userEmail }],
  }); // checks if the user already exists

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashPassword = await bcrypt.hash(password , 10);

  const newUser = new User({ userName, userEmail, role, password : hashPassword });

  await newUser.save();

  return res.status(200).json({
    success: true,
    message: "User registered successfully",
  });
};

module.exports = { registerUser };