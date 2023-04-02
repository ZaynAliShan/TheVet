const Patient = require('../models/Patients.js');
const Appointment = require('../models/Appointments');
const Users = require('../models/Users');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const findAppointment = async (id)=>{
    let app = await Appointment.findOne({_id : `${id}`})
    return app;
}
router.get('/all', async (req,res)=>{
    try{
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
    }
    catch(error){
        res.status(404).json({ Message: error.Message });
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const appointmentObject = await Appointment.findOne({_id : req.params.id});
        if(appointmentObject!=null)
        {
            const patientObject = await Patient.findOne({appointments : {$in :req.params.id}});
            await Patient.updateOne({_id : patientObject._id},{$pull : {appointments : req.params.id}});
            await Appointment.deleteOne({_id : req.params.id});
            res.status(200).json({Message : "user is deleted " + patientObject});
        }
        else{

        }
        
    }
    catch(error){
        res.status(404).json({ Message: error.Message });
    }
});
router.post(
    "/addPatient",
    [
        check("name", "Please Enter a valid name").isLength({ min: 3 }),
        check("animalType", "AnimalType cannot be empty.").exists().withMessage("AnimalType cannot be empty"),
        check("breed", "breed cannot be empty.").exists(),
        check("gender", "gender cannot be empty.").exists(),
        check("age", "Age cannot be empty.").exists().isFloat({ min: 0, max: 200 }).withMessage('Numeric field must be between 0 and 200'),
        
        
      ],
   
    async (req, res) => {    
      
        let success = false;
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ success, errors: errors.array() });
        }
    try{
      pt = await Patient.create({
        name: req.body.name,
        animalType: req.body.animalType,
        breed: req.body.breed,
        gender:req.body.gender,
        age:req.body.age,
        
      });
      const user=await Users.findOne({ _id : req.body.id });
      const objectId = mongoose.Types.ObjectId(pt.id);  
      await Users.updateOne({ _id: user._id}, { $push: { patients: objectId } });
      success = true;
      res.json({ success});
    }catch(error)
    {
        success = false;
        return res.status(500).json({ success, errors: errors.array() })
    }
    
     
      
      

     
    }
  );
  


module.exports = router;