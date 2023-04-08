const Patient = require("../models/Patients.js");
const Appointment = require("../models/Appointments");
const Users = require("../models/Users");
const Schedule = require("../models/Schedules.js");
const Doctor = require("../models/Doctors.js");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const mongoose = require("mongoose");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/add",
  [
    body("name", "Please Enter a valid name").isLength({ min: 3 }),
    body("email", "Please Enter a valid Email!!!").isEmail(),
    body(
      "licenceNumber",
      "LiscenceNumber must contain atleast 5 Characters."
    ).isLength({ min: 5 }),
    body("experience", "Experince cannot be empty.")
      .exists()
      .isFloat({ min: 0, max: 50 })
      .withMessage("Experince must be between 0 and 50"),
  ],

  async (req, res) => {
    console.log(req.body.name + req.body.phone);
    let success = false;
    // Email Validayion for uniqueness
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let doc = await Doctor.findOne({ email: req.body.email });
      if (doc) {
        return res.status(400).json({
          success,
          error: "Sorry a Doc with this email already exists",
        });
      }
      let lis = await Doctor.findOne({ licenceNumber: req.body.licenceNumber });

      if (lis) {
        return res.status(400).json({
          success,
          error: "Sorry a Doc with this licenceNumber already exists",
        });
      }

      doctor = await Doctor.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        licenceNumber: req.body.licenceNumber,
        experience: req.body.experience,
      });
      success = true;
      res.json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, errors: errors.array() });
    }
  }
);
router.get("/all", async (req, res) => {
  try {
    const doc = await Doctor.find({});
    console.log(doc[0].name + " " + doc[0]._id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

module.exports = router;
