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
      .isFloat({ min: 1, max: 50 })
      .withMessage("Experince must be between 1 and 50"),
  ],

  async (req, res) => {
    let success = false;
    // Email Validayion for uniqueness
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log("Validation Error!");
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let doc = await Doctor.findOne({ email: req.body.email });
      if (doc) {
        // console.log("Sorry a Doc with this email already exists");
        return res.status(400).json({
          success,
          error: "Sorry a Doc with this email already exists",
        });
      }
      let lis = await Doctor.findOne({
        licenceNumber: req.body.licenceNumber,
      });

      if (lis) {
        // console.log("Sorry a Doc with this licenceNumber already exists");
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
    const doc = await Doctor.find({ status: "Active" });
    // console.log(doc[0].name + " " + doc[0]._id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.get("/allDoctorsAdmin", async (req, res) => {
  try {
    const doc = await Doctor.find({});
    // console.log(doc[0].name + " " + doc[0]._id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.post("/makeInctive/:id", async (req, res) => {
  try {
    const doc = await Doctor.updateOne(
      { _id: req.params.id },
      {
        $set: { status: "Inactive" },
      }
    );
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.post("/makeActive/:id", async (req, res) => {
  try {
    const doc = await Doctor.updateOne(
      { _id: req.params.id },
      {
        $set: { status: "Active" },
      }
    );
    res.status(200).json(doc);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.get("/doctorById/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const doc = await Doctor.findById(id);
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.put(
  "/updateDoctor/:id",
  [
    body("name", "Please Enter a valid name").isLength({ min: 3 }),
    body("email", "Please Enter a valid Email!!!").isEmail(),
    body(
      "licenceNumber",
      "LiscenceNumber must contain atleast 5 Characters."
    ).isLength({ min: 5 }),
    body("experience", "Experince cannot be empty.")
      .exists()
      .isFloat({ min: 1, max: 50 })
      .withMessage("Experince must be between 1 and 50"),
  ],

  async (req, res) => {
    let success = false;
    const id = req.params.id;
    // Email Validayion for uniqueness
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log("Validation Error!");
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      let doc = await Doctor.findOne({ email: req.body.email });
      if (doc && doc._id != id) {
        // console.log("Sorry a Doc with this email already exists");
        return res.status(400).json({
          success,
          error: "Sorry a Doc with this email already exists",
        });
      }

      let lis = await Doctor.findOne({ licenceNumber: req.body.licenceNumber });

      if (lis && lis._id != id) {
        // console.log("Sorry a Doc with this licenceNumber already exists");
        return res.status(400).json({
          success,
          error: "Sorry a Doc with this licenceNumber already exists",
        });
      }

      console.log("Hello There");

      const { name, email, phone, gender, licenceNumber, experience } =
        req.body;

      Doctor.findByIdAndUpdate(
        id,
        { name, email, phone, gender, licenceNumber, experience },
        { new: true }
      )
        .then((updatedUser) => {
          success = true;
          res.json({ success });
        })
        .catch((err) => {
          success = false;
          return res.status(500).json({ success, errors: errors.array() });
        });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, errors: errors.array() });
    }
  }
);
module.exports = router;
