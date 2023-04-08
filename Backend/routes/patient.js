const Patient = require("../models/Patients.js");
const Users = require("../models/Users");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const Patients = require("../models/Patients.js");
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

router.get("/getMyAllPatients", fetchuser, async (req, res) => {
  try {
    let user = await Users.findById(req.user.id);
    let myPatients = [];
    var i = 0;
    while (i < user.patients.length) {
      let patient = await Patients.findById(user.patients[i]);
      myPatients.push(patient);
      i = i + 1;
    }
    res.send(myPatients);
  } catch (error) {
    return res.status(500).send("Internal Server Error!!!");
  }
});

module.exports = router;
