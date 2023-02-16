// schema for our Schedule table

const mongoose = require('mongoose');

const { Schema } = mongoose

const ScheduleSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true
  },//specific doctor is associated against each schedule
  doctor : {
    type : Schema.Types.ObjectId,
    ref : 'doctors'
  }
});

const Schedules = mongoose.model('schedules', ScheduleSchema);

module.exports =  Schedules;
