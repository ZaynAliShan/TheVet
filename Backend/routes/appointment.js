const Patient = require('../models/Patient.js');
const Appointment = require('../models/Appointments');
const express = require('express');
const router = express.Router();

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


module.exports = router;