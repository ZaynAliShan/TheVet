const Patient = require("../models/Patients.js");
const Schedule = require("../models/Schedules.js");
const Users = require("../models/Users");
const Doctor = require("../models/Doctors.js");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const router = express.Router();

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

router.get('/all', async (req, res) => {
  try {
     
    const patients = await Patient.find({});
    console.log(patients[0].name + " " + patients[0]._id)
    res.status(200).json(patients);
  }
  catch (error) {
      res.status(404).json({ Message: error.Message });
  }
});

router.get('/patientByUserId', async (req, res) => {
  try {
    const id = req.query.id;
    const user = await Users.findOne({_id : id});
    console.log(user.patients)
    const patients = await Patient.find({
      '_id': { $in: user.patients }
    });
    console.log(patients)
    res.status(200).json(patients);
  }
  catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.get('/getSchedule', async (req, res) => {
  try {
    
    const schedule = await Schedule.find({ 
      doctor: { $exists: true, $ne: null },
      _id: { $nin: await Doctor.distinct("schedules") }
    });
    res.status(200).json(schedule);
  }
  catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

module.exports = router;
