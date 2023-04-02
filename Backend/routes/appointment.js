const Patient = require("../models/Patients.js");
const Appointment = require("../models/Appointments");
const Users = require("../models/Users");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const mongoose = require("mongoose");
const router = express.Router();

const findAppointment = async (id) => {
  let app = await Appointment.findOne({ _id: `${id}` });
  return app;
};
router.get("/all", async (req, res) => {
  try {
    let patientList = [];

    const patients = await Patient.find({});

    for (const patient of patients) {
      let patientObj = {};
      patientObj.patient = patient;

      for (const item of patient.appointments) {
        let appointment = [];
        let app = await findAppointment(item._id);
        appointment.push(app);
        patientObj.appointmentList = appointment;
        patientList.push(patientObj);
      }
    }

    res.status(200).json({ patientList });
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const appointmentObject = await Appointment.findOne({ _id: req.params.id });
    if (appointmentObject != null) {
      const patientObject = await Patient.findOne({
        appointments: { $in: req.params.id },
      });
      await Patient.updateOne(
        { _id: patientObject._id },
        { $pull: { appointments: req.params.id } }
      );
      await Appointment.deleteOne({ _id: req.params.id });
      res.status(200).json({ Message: "user is deleted " + patientObject });
    } else {
    }
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});
router.post(
  "/addPatient",

  async (req, res) => {
    pt = await Patient.create({
      name: req.body.name,
      animalType: req.body.animalType,
      breed: req.body.breed,
      gender: req.body.gender,
      age: req.body.age,
    });
    const user = await Users.findOne({ _id: req.body.id });
    const objectId = mongoose.Types.ObjectId(pt.id);
    await Users.updateOne({ _id: user._id }, { $push: { patients: objectId } });
    res.send("Addes the Patient");
  }
);
router.delete("/deletePatient/:id", fetchuser, async (req, res) => {
  try {
    // find the Patient to be updated
    let patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).send("Not Found!!!");
    }

    patient = await Patient.findByIdAndDelete(req.params.id);

    await Users.updateOne(
      { _id: req.user.id },
      { $pull: { patients: req.params.id } }
    );

    res.json({
      Success: "Patient Has Been Deleted",
      Patient: patient,
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error!!!");
  }
});

module.exports = router;
