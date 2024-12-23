const express = require("express");
const {
  AddDoctor,
  GetDoctors,
  UpdateDoctor,
  DeleteDoctor,
  GetDoctorById,
} = require("../controllers/doctorsControllers");
const route = express.Router();

route.route("/doctors").post(AddDoctor).get(GetDoctors);
route
  .route("/doctors/:id")
  .put(UpdateDoctor)
  .delete(DeleteDoctor)
  .get(GetDoctorById);
module.exports = route;
