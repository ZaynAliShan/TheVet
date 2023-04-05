// schema for our Appointment table

const mongoose = require('mongoose');

const { Schema } = mongoose

const AppointmentSchema = new Schema({
  attendent: {
    type: String,
    required: true,
  },
  attendentGender: {
    type: String,
    required: true
  },
  checkupType:{
    type:String,
    required: true
  },
  caseStatus:{
    type: String,
    required: false
  },
  admitted:{
    type: Boolean,
    required: false
  },
  date :{
    type :Date,
    required : false
  },
  //one appointment can  have only one schedule object associated with it
  schedule : {
    type : Schema.Types.ObjectId,
    ref : 'schedules'
  }
});

const Appointments = mongoose.model('appointments', AppointmentSchema);

module.exports =  Appointments;
