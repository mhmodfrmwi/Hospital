const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 100,
    },
    patientName: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 100,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    status: {
      type: String,
      enum: ["Confirmed", "Pending", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const validateAppointment = (obj) => {
  const schema = Joi.object({
    doctorName: Joi.string().trim().min(4).max(100).required(),
    patientName: Joi.string().trim().min(4).max(100).required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
    reason: Joi.string().trim().min(5).required(),
    status: Joi.string()
      .valid("Confirmed", "Pending", "Cancelled")
      .default("Pending"),
  });
  return schema.validate(obj);
};

const validateUpdateAppointment = (obj) => {
  const schema = Joi.object({
    doctorName: Joi.string().trim().min(4).max(100),
    patientName: Joi.string().trim().min(4).max(100),
    date: Joi.string(),
    time: Joi.string(),
    reason: Joi.string().trim().min(5),
    status: Joi.string().valid("Confirmed", "Pending", "Cancelled"),
  });
  return schema.validate(obj);
};

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = {
  Appointment,
  validateAppointment,
  validateUpdateAppointment,
};
