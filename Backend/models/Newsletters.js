// schema for our Newsletter table

const mongoose = require('mongoose');

const { Schema } = mongoose

const NewsletterSchema = new Schema({
  email: {
    type: String,
    required: true,
  }
});

const Newsletters = mongoose.model('newsletters', NewsletterSchema);

module.exports =  Newsletters;
