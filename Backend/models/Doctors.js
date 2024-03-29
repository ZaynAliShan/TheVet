// schema for our Doctor table

const mongoose = require("mongoose");

const { Schema } = mongoose;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  licenceNumber: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: String,
    required: true,
  },
  status: {
    // the date our user got registered
    type: String,
    default: "Active",
  },
  // one doctor can have many appointments so array will contain all
  // reference ids to the appointment objects associated with single doctor
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: "appointments",
    },
  ],
  schedules: [
    {
      type: Schema.Types.ObjectId,
      ref: "schedules",
    },
  ],
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "patients",
    },
  ],
});

const Doctors = mongoose.model("doctors", DoctorSchema);

module.exports = Doctors;
