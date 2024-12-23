const asyncHandler = require("express-async-handler");
const { validateDoctor, Doctor, validateUpdate } = require("../DB/doctor");

const AddDoctor = asyncHandler(async (req, res) => {
  const { error } = validateDoctor(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const {
    name,
    email,
    specialization,
    experience,
    phone,
    availability,
    image,
  } = req.body;

  const existingDoctor = await Doctor.findOne({ email });
  if (existingDoctor) {
    return res
      .status(400)
      .json({ message: "Doctor with this email already exists." });
  }

  const doctor = new Doctor({
    name,
    email,
    specialization,
    experience,
    phone,
    availability,
    image,
  });

  const savedDoctor = await doctor.save();

  res.status(201).json({
    message: "Doctor added successfully.",
    doctor: savedDoctor,
  });
});

const UpdateDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { error } = validateUpdate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found." });
  }

  Object.assign(doctor, req.body);
  const updatedDoctor = await doctor.save();

  res.status(200).json({
    message: "Doctor updated successfully.",
    doctor: updatedDoctor,
  });
});

const DeleteDoctor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found." });
  }

  await doctor.deleteOne();

  res.status(200).json({
    message: "Doctor deleted successfully.",
  });
});

const GetDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({});
  res.status(200).json({
    message: "Doctors retrieved successfully.",
    doctors,
  });
});

const GetDoctorById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found." });
  }

  res.status(200).json({
    message: "Doctor retrieved successfully.",
    doctor,
  });
});

module.exports = {
  AddDoctor,
  UpdateDoctor,
  DeleteDoctor,
  GetDoctors,
  GetDoctorById,
};
