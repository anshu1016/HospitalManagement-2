const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
  ward_Number: {
    type: Number,
    required: true,
    min: 1,
    max: 20

  },
  capacity: {
    type: Number,
    required: true
  },
  specialization: {
    type: String,
    required: true
  }
})

const Ward = mongoose.model('wards', wardSchema);

module.exports = { Ward }