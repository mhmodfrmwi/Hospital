const express = require("express");
const {
  GetAppointments,
  AddAppointment,
  GetAppointmentById,
  UpdateAppointment,
  DeleteAppointment,
} = require("../controllers/appointmentsController");
const route = express.Router();

route.route("/appointments").get(GetAppointments).post(AddAppointment);
route
  .route("/appointments/:id")
  .get(GetAppointmentById)
  .put(UpdateAppointment)
  .delete(DeleteAppointment);

module.exports = route;
