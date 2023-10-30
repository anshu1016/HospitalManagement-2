const { Patient } = require('../model/patient.model.js');

const getAllPatients = async () => {
  try {
    return await Patient.find({});
  } catch (error) {
    console.error("Error fetching all patients:", error);
    throw error;
  }
};

const addPatient = async (patientData) => {
  try {
    const newPatient = new Patient(patientData);
    return await newPatient.save();
  } catch (error) {
    console.error("Error adding new patient:", error);
    throw error;
  }
};

const deletePatient = async (patientId) => {
  try {
    await Patient.findByIdAndDelete(patientId);
    return await Patient.find({});
  } catch (error) {
    console.error(`Error deleting patient with ID ${patientId}:`, error);
    throw error;
  }
};

const updatePatient = async (patientId, patientData) => {
  try {
    await Patient.findByIdAndUpdate(patientId, patientData, { new: true });
    return await Patient.find({});
  } catch (error) {
    console.error(`Error updating patient with ID ${patientId}:`, error);
    throw error;
  }
};

module.exports = { addPatient, updatePatient, deletePatient, getAllPatients };
