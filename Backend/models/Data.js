const mongoose = require('mongoose');

const { Schema } = mongoose;

const DataSchema = new Schema({
    
    Data : {
        type : Array,
        default : []
    },
    patient : {
        type : Schema.Types.ObjectId,
        ref : 'patients'
    }
})

const Data = mongoose.model('data',DataSchema);
module.exports = Data;