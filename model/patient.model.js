const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 150  
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", 'Female', 'Others']
  },
  contact: {
    type: String,
    required: true
  },
  ward: {
    type: Number,
    required: true
  },
  medicalHistory: {   // renamed to camelCase
    type: String,
  }
});

const Patient = mongoose.model('patients', patientSchema);  // Changed to mongoose.model
module.exports = { Patient };
