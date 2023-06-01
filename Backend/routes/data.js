
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Data = require("../models/Data.js");
const Patient = require("../models/Patients.js");


router.post("/add", async (req,res)=>{
    try {
        //verify if patient exist
        const patient = await Patient.findById(req.body.id);
        if(patient)
        {
            const data = {
                Data  : req.body.questionArray,
                patient : req.body.id
            }
            const newData = new Data(data);
            await newData.save();
        }
        else
        {
            return res.status(404).json("patien with specified id is not found");
        }
        
    }
    catch(error){
        const success = false;
        res.status(500).json({ success, error: error.message });
    }
})
module.exports = router;