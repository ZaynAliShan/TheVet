const Patient = require('../models/Patients.js');
const Appointment = require('../models/Appointments');
const Schedule = require('../models/Schedules.js');
const Doctor = require('../models/Doctors.js');
const express = require('express');
const router = express.Router();

const findAppointment = async (id) => {
    let app = await Appointment.findOne({ _id: `${id}` })
    return app;
}
router.get('/all', async (req, res) => {
    try {
        let patientList = [];

        const patients = await Patient.find({});

        
        for (const patient of patients) {
          
          const appointments = await Appointment.find({
            '_id': { $in: patient.appointments }
          });
          for(const appointment of appointments)
          {
              const patientObj = {};
              patientObj.patient = patient;
              patientObj.appointmentList = appointment;
              patientList.push(patientObj);
          }
        }

        res.status(200).json({ patientList });
    }
    catch (error) {
        res.status(404).json({ Message: error.Message });
    }
});

router.post('/add', async (req, res) => {
    try {
      const appointmentData = {
        attendent: req.body.attendent,
        attendentGender: req.body.attendentGender,
        checkupType: req.body.checkupType,
        caseStatus: req.body.caseStatus,
        admitted: req.body.admitted,
        schedule: null,
      };
  
      const schedule = await Schedule.findOne({ time: req.body.time });
      if (!schedule) {
        return res.status(404).json({ error: 'No schedule found for the given time' });
      }
  
      appointmentData.schedule = schedule._id;
      const doctorId = schedule.doctor;
      if (!doctorId) {
        return res.status(404).json({ error: 'No doctor is available in this slot' });
      }
  
      const newApp = new Appointment(appointmentData);
      await newApp.save();
  
      const patientUpdateResult = await Patient.updateOne(
        { _id: req.body.patientId },
        { $push: { appointments: newApp._id } }
      );
  
      if (patientUpdateResult.nModified === 0) {
        await newApp.remove();
        return res.status(500).json({ error: 'Failed to add appointment to patient' });
      }
  
      const doctorUpdateResult = await Doctor.updateOne(
        { _id: doctorId },
        { $push: { appointments: newApp._id } }
      );
  
      if (doctorUpdateResult.nModified === 0) {
        await newApp.remove();
        await Patient.updateOne(
          { _id: req.body.patientId },
          { $pull: { appointments: newApp._id } }
        );
        return res.status(500).json({ error: 'Failed to add appointment to doctor' });
      }
  
      res.status(201).json(newApp);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

router.delete('/:id', async (req, res) => {
    try {
        const appointmentObject = await Appointment.findOne({ _id: req.params.id });
        if (appointmentObject != null) {
            const patientObject = await Patient.findOne({ appointments: { $in: req.params.id } });
            await Patient.updateOne({ _id: patientObject._id }, { $pull: { appointments: req.params.id } });
            await Appointment.deleteOne({ _id: req.params.id });
            res.status(200).json({ Message: "user is deleted " + patientObject });
        }
        else {

        }

    }
    catch (error) {
        res.status(404).json({ Message: error.Message });
    }
});


module.exports = router;