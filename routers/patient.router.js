const { addPatient, deletePatient, updatePatient, getAllPatients } = require('../query/patient.query.js'); 
const { Router } = require('express');

const patientRoute = Router();


patientRoute.post('/', async (req, res) => {
  try {
    const addedPatient = await addPatient(req.body);
    res.status(201).json({ message: "Patient data added successfully", data: addedPatient });
  } catch (error) {
    res.status(400).json({ message: "Check the request body and try again", error });
  }
});


patientRoute.delete('/:patientId', async (req, res) => {
  try {
    const updatedData = await deletePatient(req.params.patientId);
    res.json({ message: "Patient data deleted successfully", data: updatedData });
  } catch (error) {
    res.status(400).json({ message: 'Check the request param and try again', error });
  }
});


patientRoute.put('/:patientId', async (req, res) => {
  try {
    const updatedData = await updatePatient(req.params.patientId, req.body);
    res.json({ message: "Patient data updated successfully", data: updatedData });
  } catch (error) {
    res.status(400).json({ message: 'Check the request body and try again', error });
  }
});


patientRoute.get('/', async (req, res) => {
  try {
    const data = await getAllPatients();
    if (data.length > 0) {
      res.json({ message: "Fetched all patients data", data });
    } else {
      res.json({ message: "Patient database is empty", data });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Unable to fetch data", error });
  }
});

module.exports = { patientRoute };
