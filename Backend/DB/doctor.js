const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
      maxlength: 100,
    },
    specialization: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      maxlength: 100,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
      default: {
        url: "https://www.docton.in/assets/images/male_doc.png",
        publicId: null,
      },
    },
    availability: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one availability day must be provided.",
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

doctorSchema.methods.generateToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email, specialization: this.specialization },
    process.env.JWT_SECRET_KEY
  );
};

const validateDoctor = (obj) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(4).max(100).required(),
    specialization: Joi.string().trim().min(3).max(50).required(),
    experience: Joi.string().trim().required(),
    email: Joi.string().trim().min(6).max(100).required().email(),
    phone: Joi.string().trim().required(),
    availability: Joi.array().items(Joi.string()).min(1).required(),
  });
  return schema.validate(obj);
};

const validateUpdate = (obj) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(4).max(100),
    specialization: Joi.string().trim().min(3).max(50),
    experience: Joi.string().trim(),
    email: Joi.string().trim().min(6).max(100).email(),
    phone: Joi.string().trim(),
    availability: Joi.array().items(Joi.string()).min(1),
  });
  return schema.validate(obj);
};

const validateAvailability = (obj) => {
  const schema = Joi.object({
    availability: Joi.array().items(Joi.string()).min(1).required(),
  });
  return schema.validate(obj);
};

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = {
  Doctor,
  validateDoctor,
  validateUpdate,
  validateAvailability,
};
