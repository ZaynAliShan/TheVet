const Patient = require("../models/Patients.js");
const Appointment = require("../models/Appointments");
const Users = require("../models/Users");
const Schedule = require("../models/Schedules.js");
const Doctor = require("../models/Doctors.js");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const mongoose = require("mongoose");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { ObjectId } = require("mongodb");

const addSchedule = async (time, date, doctorId) => {
  const schedule = await Schedule.findOne({
    date: date,
    time: time,
    doctor: doctorId,
  });
  if (!schedule) {
    const scheduleObj = { date: date, time: time, doctor: doctorId };
    const newSchedule = new Schedule(scheduleObj);
    await newSchedule.save();
    return newSchedule;
  } else {
    return false;
  }
};

router.get("/all", async (req, res) => {
  try {
    let patientList = [];

    const patients = await Patient.find({});

    for (const patient of patients) {
      const appointments = await Appointment.find({
        _id: { $in: patient.appointments },
      });
      for (const appointment of appointments) {
        const patientObj = {};
        patientObj.patient = patient;
        patientObj.appointmentList = appointment;
        patientList.push(patientObj);
      }
    }

    res.status(200).json({ patientList });
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});
router.post("/add", async (req, res) => {
  try {
    // console.log("JustChecking");
    const appointmentData = {
      attendent: req.body.attendent,
      attendentGender: req.body.attendentGender,
      caseStatus: req.body.caseStatus,
    };
    const newSchedule = await addSchedule(
      req.body.time,
      req.body.date,
      req.body.doctorId
    );
    if (newSchedule === false) {
      return res.status(404).json({
        error:
          "this slot with doctorId " +
          req.body.doctorId +
          "is already booked..",
      });
    }

    appointmentData.schedule = newSchedule._id;
    const newApp = new Appointment(appointmentData);
    await newApp.save();

    const patientUpdateResult = await Patient.updateOne(
      { _id: req.body.patientId },
      { $push: { appointments: newApp._id } }
    );

    if (patientUpdateResult.nModified === 0) {
      await newApp.remove();
      await Schedule.findByIdAndDelete(newSchedule._id);
      const success = false;
      return res
        .status(500)
        .json({ success, error: "Failed to add appointment to patient" });
    }

    const doctorUpdateResult = await Doctor.updateOne(
      { _id: req.body.doctorId },
      { $push: { appointments: newApp._id } }
    );
    // console.log("Here at line 91");

    if (doctorUpdateResult.nModified === 0) {
      await newApp.remove();
      await Patient.updateOne(
        { _id: req.body.patientId },
        { $pull: { appointments: newApp._id } }
      );
      await Schedule.findByIdAndDelete(newSchedule._id);
      // console.log("Here at line 99");
      const success = false;
      return res
        .status(500)
        .json({ success, error: "Failed to add appointment to doctor" });
    }

    const data = { message: "Added Appointment" };
    res.json(data);

    // res.status(201).json(newApp);
  } catch (error) {
    const success = false;
    res.status(500).json({ success, error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const appointmentObject = await Appointment.findOne({ _id: req.params.id });
    const scheduleId = appointmentObject.schedule;

    if (appointmentObject != null) {
      const patientObject = await Patient.findOne({
        appointments: { $in: req.params.id },
      });
      // removing appointment id from patient table
      await Patient.updateOne(
        { _id: patientObject._id },
        { $pull: { appointments: req.params.id } }
      );
      // Remove the appointment  from the doctor table
      const doctorObject = await Doctor.findOne({
        appointments: { $in: req.params.id },
      });
      await Doctor.updateOne(
        { _id: doctorObject._id },
        { $pull: { appointments: req.params.id } }
      );
      await Schedule.findByIdAndDelete(scheduleId);
      await Appointment.deleteOne({ _id: req.params.id });
      res.status(200).json({ Message: "user is deleted " + patientObject });
    } else {
      res.status(404).json("appointment object is not found");
    }
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});
router.post(
  "/addPatient",
  [
    check("name", "Please Enter a valid name").isLength({ min: 3 }),
    check("animalType", "AnimalType cannot be empty.")
      .exists()
      .withMessage("AnimalType cannot be empty"),
    check("breed", "breed cannot be empty.").exists(),
    check("gender", "gender cannot be empty.").exists(),
    check("age", "Age cannot be empty.")
      .exists()
      .isFloat({ min: 0, max: 200 })
      .withMessage("Numeric field must be between 0 and 200"),
  ],

  async (req, res) => {
    let success = false;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try {
      pt = await Patient.create({
        name: req.body.name,
        animalType: req.body.animalType,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
      });
      const user = await Users.findOne({ _id: req.body.id });
      const objectId = mongoose.Types.ObjectId(pt.id);
      await Users.updateOne(
        { _id: user._id },
        { $push: { patients: objectId } }
      );
      success = true;
      res.json({ success });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, errors: errors.array() });
    }
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

router.get("/getUserAppointments/:id", async (req, res) => {
  try {
    let user = await Users.findById(req.params.id);
    let i = 0;
    let userPatients = [];
    while (i < user.patients.length) {
      userPatients.push(await Patient.findById(user.patients[i]));
      i = i + 1;
    }
    i = 0;
    let userApppointments = [];

    while (i < userPatients.length) {
      let j = 0;
      while (j < userPatients[i].appointments.length) {
        userApppointments.push({
          _id: userPatients[i]._id,
          name: userPatients[i].name,
          appointment: await Appointment.findById(
            userPatients[i].appointments[j]
          ),
        });
        j++;
      }
      i++;
    }

    i = 0;
    var allAppointments = [];
    while (i < userApppointments.length) {
      allAppointments.push({
        patientId: userApppointments[i]._id,
        patientName: userApppointments[i].name,
        AppointmentId: userApppointments[i].appointment._id,
        AppointmentAttendent: userApppointments[i].appointment.attendent,
        AppointmentCaseStatus: userApppointments[i].appointment.caseStatus,
        AppointmentSchedule: await Schedule.findById(
          userApppointments[i].appointment.schedule
        ),
      });
      i = i + 1;
    }

    var finalAppointment = [];
    i = 0;
    while (i < allAppointments.length) {
      finalAppointment.push({
        patientId: allAppointments[i].patientId,
        patientName: allAppointments[i].patientName,
        AppointmentId: allAppointments[i].AppointmentId,
        AppointmentAttendent: allAppointments[i].AppointmentAttendent,
        AppointmentCaseStatus: allAppointments[i].AppointmentCaseStatus,
        AppointmentScheduleId: allAppointments[i].AppointmentSchedule._id,
        AppointmentScheduleDate: allAppointments[i].AppointmentSchedule.date,
        AppointmentScheduleTime: allAppointments[i].AppointmentSchedule.time,
        AppointmentDoctor: await Doctor.findById(
          allAppointments[i].AppointmentSchedule.doctor
        ),
      });
      i = i + 1;
    }
    res.status(200).json(finalAppointment);
  } catch (error) {
    return res.status(500).send("Internal Server Error!!!");
  }
});

router.post("/:id", async (req, res) => {
  try {
    const oldAppointment = await Appointment.findOne({ _id: req.params.id });
    const oldSchedule = await Schedule.findById(oldAppointment.schedule);
    const appointmentData = {
      attendent: req.body.attendent,
      attendentGender: req.body.attendentGender,
      checkupType: req.body.checkupType,
      caseStatus: req.body.caseStatus,
      admitted: req.body.admitted,
      schedule: null,
    };

    console.log(
      oldSchedule.date.toISOString() === new Date(req.body.date).toISOString()
    );
    if (
      oldSchedule.date.toISOString() ===
        new Date(req.body.date).toISOString() &&
      oldSchedule.time === req.body.time &&
      oldSchedule.doctor.equals(new ObjectId(req.body.doctorId))
    ) {
      console.log("in if f***");
      appointmentData.schedule = oldAppointment.schedule;
      const newApp = new Appointment(appointmentData);
      newApp._id = req.params.id;
      await Appointment.updateOne({ _id: req.params.id }, newApp);
      await Patient.updateOne(
        { appointments: { $in: oldAppointment._id } },
        { $pull: { appointments: newApp._id } }
      );
      await Patient.updateOne(
        { _id: req.body.patientId },
        { $push: { appointments: newApp._id } }
      );
      res.status(201).json(newApp);
    } else {
      console.log("in else");
      //deleting appointment from doctor appointment array
      await Doctor.updateOne(
        { _id: oldSchedule.doctor },
        { $pull: { appointments: req.params.id } }
      );
      //deleting schedule from schedules
      await Schedule.findByIdAndDelete(oldAppointment.schedule);
      //finding new schedule based on date and doctor provided
      const newSchedule = await addSchedule(
        req.body.time,
        req.body.date,
        req.body.doctorId
      );
      if (newSchedule === false) {
        return res.status(404).json({
          error:
            "this slot with doctorId " +
            req.body.doctorId +
            "is already booked..",
        });
      }
      appointmentData.schedule = newSchedule._id;
      const newApp = new Appointment(appointmentData);
      newApp._id = req.params.id;
      await Appointment.updateOne({ _id: req.params.id }, newApp);
      const doctorUpdateResult = await Doctor.updateOne(
        { _id: req.body.doctorId },
        { $push: { appointments: req.params.id } }
      );
      if (doctorUpdateResult.nModified === 0) {
        await Schedule.findByIdAndDelete(newSchedule._id);
        return res
          .status(500)
          .json({ error: "Failed to update appointment to doctor" });
      }
      await Patient.updateOne(
        { appointments: { $in: oldAppointment._id } },
        { $pull: { appointments: newApp._id } }
      );
      await Patient.updateOne(
        { _id: req.body.patientId },
        { $push: { appointments: newApp._id } }
      );

      res.status(201).json(newApp);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/cancelAppointment/:id", async (req, res) => {
  try {
    const app = await Appointment.updateOne(
      { _id: req.params.id },
      {
        $set: { caseStatus: "cancelled" },
      }
    );
    res.status(200).json(app);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.get("/getAdminAppointments", async (req, res) => {
  try {
    let users = await Users.find({});
    let i = 0;
    let userPatients = [];
    while (i < users.length) {
      let j = 0;
      while (j < users[i].patients.length) {
        userPatients.push({
          AppointmentUserId: users[i]._id,
          AppointmentUser: users[i].name,
          AppointmentUserEmail: users[i].email,
          AppointmentPatient: await Patient.findById(users[i].patients[j]),
        });
        j = j + 1;
      }
      i = i + 1;
    }
    i = 0;
    let userApppointments = [];

    while (i < userPatients.length) {
      let j = 0;
      while (j < userPatients[i].AppointmentPatient.appointments.length) {
        userApppointments.push({
          UserId: userPatients[i].AppointmentUserId,
          User: userPatients[i].AppointmentUser,
          UserEmail: userPatients[i].AppointmentUserEmail,
          patientId: userPatients[i].AppointmentPatient._id,
          patientName: userPatients[i].AppointmentPatient.name,
          appointment: await Appointment.findById(
            userPatients[i].AppointmentPatient.appointments[j]
          ),
        });
        j++;
      }
      i++;
    }

    i = 0;
    var allAppointments = [];
    while (i < userApppointments.length) {
      allAppointments.push({
        UserId: userApppointments[i].UserId,
        User: userApppointments[i].User,
        UserEmail: userApppointments[i].UserEmail,
        patientId: userApppointments[i].patientId,
        patientName: userApppointments[i].patientName,
        AppointmentId: userApppointments[i].appointment._id,
        AppointmentAttendent: userApppointments[i].appointment.attendent,
        AppointmentCaseStatus: userApppointments[i].appointment.caseStatus,
        AppointmentSchedule: await Schedule.findById(
          userApppointments[i].appointment.schedule
        ),
      });
      i = i + 1;
    }

    var finalAppointment = [];
    i = 0;
    while (i < allAppointments.length) {
      finalAppointment.push({
        UserId: allAppointments[i].UserId,
        User: allAppointments[i].User,
        UserEmail: allAppointments[i].UserEmail,
        patientId: allAppointments[i].patientId,
        patientName: allAppointments[i].patientName,
        AppointmentId: allAppointments[i].AppointmentId,
        AppointmentAttendent: allAppointments[i].AppointmentAttendent,
        AppointmentCaseStatus: allAppointments[i].AppointmentCaseStatus,
        AppointmentScheduleId: allAppointments[i].AppointmentSchedule._id,
        AppointmentScheduleDate: allAppointments[i].AppointmentSchedule.date,
        AppointmentScheduleTime: allAppointments[i].AppointmentSchedule.time,
        AppointmentDoctor: await Doctor.findById(
          allAppointments[i].AppointmentSchedule.doctor
        ),
      });
      i = i + 1;
    }
    res.status(200).json(finalAppointment);
  } catch (error) {
    return res.status(500).send("Internal Server Error!!!");
  }
});

module.exports = router;
