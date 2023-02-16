// schema for our Patient table

const mongoose = require('mongoose');

const { Schema } = mongoose

const PatientSchema = new Schema({
  animalType: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: { 
    type: Number,
    required: true
  },
  // one patient can have many appointments so array will contain all 
  // reference ids to the appointment objects associated with single patient
  appointments: [{
    type : Schema.Types.ObjectId,
    ref : 'appointments'
  }]
});

const Patients = mongoose.model('patients', PatientSchema);

module.exports =  Patients;
