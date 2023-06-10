const Patient = require("../models/Patients.js");
const Schedule = require("../models/Schedules.js");
const Users = require("../models/Users");
const Doctor = require("../models/Doctors.js");
const AnimalCount = require("../models/AnimalCount.js");
const express = require("express");
var fetchuser = require("../middleware/fetchuser");
const Patients = require("../models/Patients.js");
const router = express.Router();
const { check, validationResult } = require("express-validator");






const app = express();
const PORT = 3000; // Replace with your desired port number

// Example implementation using Express.js
// app.get('/animalUpdates', (req, res) => {
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Listen for database updates and send the updated data to connected clients
//   database.on('update', updatedData => {
//     res.write(`event: animalUpdate\n`);
//     res.write(`data: ${JSON.stringify(updatedData)}\n\n`);
//   });

//   // Send a heartbeat to keep the connection alive
//   setInterval(() => {
//     res.write(': heartbeat\n\n');
//   }, 10000);
// });

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

router.get("/all", async (req, res) => {
  try {
    const patients = await Patient.find({});

    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});

router.get("/patientByUserId", async (req, res) => {
  try {
    const id = req.query.id;
    const user = await Users.findOne({ _id: id });

    const patients = await Patient.find({
      _id: { $in: user.patients },
    });

    res.status(200).json(patients);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});
router.get("/patientById/:id", async (req, res) => {
  const id = req.params.id;
 
  try {
    const patient = await Patient.findById(id);
    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
router.get("/getSchedule", async (req, res) => {
  try {
    const { date, id } = req.query;
    const schedule = await Schedule.find({
      doctor: id,
      date: date,
    });
    res.status(200).json(schedule);
  } catch (error) {
    res.status(404).json({ Message: error.Message });
  }
});



router.put('/updatePatient/:id', [
  check("name", "Please Enter a valid name").isLength({ min: 3 }),
  check("animalType", "AnimalType cannot be empty.").exists().withMessage("AnimalType cannot be empty"),
  check("breed", "breed cannot be empty.").exists(),
  check("gender", "gender cannot be empty.").exists(),
  check("age", "Age cannot be empty.").exists().isFloat({ min: 0, max: 200 }).withMessage('Numeric field must be between 0 and 200'),
  
  
], async (req, res) => {    
  let success = false;
       
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
try{
  // const { name, email } = req.body;
  const { name, animalType,breed,gender,age  } = req.body;
  console.log(animalType);
  Patient.findByIdAndUpdate(req.params.id, { name, animalType,breed,gender,age  }, { new: true })
    .then(updatedUser => {
      success = true;
      res.json({ success});
    })
    .catch(err => {
      success = false;
      return res.status(500).json({ success, errors: errors.array() });
    });
  }catch(error)
  {
    success = false;
        return res.status(500).json({ success, errors: errors.array() });
  }
});

router.get('/getDoctorPatients/:id' , async (req,res)=>{
  try{
      const doctorObj = await Doctor.findById(req.params.id)
      doctorPatientsIdsList = doctorObj.patients;
      const doctorPatientsOjects = await Patient.find({ _id : {$in : doctorPatientsIdsList}});
      res.status(200).json(doctorPatientsOjects);
  }
  catch(error)
  {
    res.status(404).json({ Message: error.Message });
  }
  



// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

})

router.get("/ac", async (req, res) => {
  try {
    // console.log("hello");
    const animalStats = await AnimalCount.find({});
    // console.log(animalStats);
    res.status(200).json(animalStats);
  } catch (error) {
    console.log("error here");
    res.status(404).json({ Message: error.Message });
  }
});
module.exports = router;
