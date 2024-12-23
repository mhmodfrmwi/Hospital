const asyncHandler = require("express-async-handler");
const {
  Appointment,
  validateAppointment,
  validateUpdateAppointment,
} = require("../DB/appointment");

const AddAppointment = asyncHandler(async (req, res) => {
  const { error } = validateAppointment(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { doctorName, patientName, date, time, reason, status } = req.body;

  const appointment = new Appointment({
    doctorName,
    patientName,
    date,
    time,
    reason,
    status,
  });

  const savedAppointment = await appointment.save();

  res.status(201).json({
    message: "Appointment added successfully.",
    appointment: savedAppointment,
  });
});

const UpdateAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { error } = validateUpdateAppointment(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found." });
  }

  Object.assign(appointment, req.body);
  const updatedAppointment = await appointment.save();

  res.status(200).json({
    message: "Appointment updated successfully.",
    appointment: updatedAppointment,
  });
});

const DeleteAppointment = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found." });
  }

  await appointment.deleteOne();

  res.status(200).json({
    message: "Appointment deleted successfully.",
  });
});

const GetAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});
  res.status(200).json({
    message: "Appointments retrieved successfully.",
    appointments,
  });
});

const GetAppointmentById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const appointment = await Appointment.findById(id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found." });
  }

  res.status(200).json({
    message: "Appointment retrieved successfully.",
    appointment,
  });
});

module.exports = {
  AddAppointment,
  UpdateAppointment,
  DeleteAppointment,
  GetAppointments,
  GetAppointmentById,
};
