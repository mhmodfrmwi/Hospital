const express = require("express");
const { Register, Login } = require("../controllers/auth/authController");

const route = express.Router();
route.post("/register", Register);
route.post("/login", Login);
module.exports = route;
