const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const { User, validateRegistration, validateLogin } = require("../../DB/user");
const jwt = require("jsonwebtoken");

const Register = asyncHandler(async (req, res) => {
  const { error } = validateRegistration(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { userName, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this email already exists." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    userName,
    email,
    password: hashedPassword,
  });

  const savedUser = await user.save();

  const token = savedUser.generateToken();

  res.status(201).json({
    message: "User registered successfully.",
    user: {
      id: savedUser._id,
      userName: savedUser.userName,
      email: savedUser.email,
      profilePhoto: savedUser.profilePhoto,
    },
    token,
  });
});

const Login = asyncHandler(async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });

  res.status(200).json({
    message: "Login successful.",
    user: {
      id: user._id,
      userName: user.userName,
      email: user.email,
      profilePhoto: user.profilePhoto,
      isAdmin: user.isAdmin,
    },
    token,
  });
});
module.exports = {
  Register,
  Login,
};
