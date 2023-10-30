const { addWard, deleteWard, updateWard, getAllWards } = require('../query/ward.query.js');
const { Router } = require('express');

const wardRoute = Router();

// POST route to add a ward
wardRoute.post('/', async (req, res) => {
  try {
    const addedWard = await addWard(req.body);
    res.status(201).json({ message: "Ward data added successfully", data: addedWard });
  } catch (error) {
    res.status(400).json({ message: "Check the request body and try again", error });
  }
});

// DELETE route to remove a ward
wardRoute.delete('/:wardId', async (req, res) => {
  try {
    const updatedWards = await deleteWard(req.params.wardId);
    res.json({ message: "Ward data deleted successfully", data: updatedWards });
  } catch (error) {
    res.status(400).json({ message: 'Check the request param and try again', error });
  }
});

// PUT route to update ward data
wardRoute.put('/:wardId', async (req, res) => {
  try {
    const updatedWards = await updateWard(req.params.wardId, req.body);
    res.json({ message: "Ward data updated successfully", data: updatedWards });
  } catch (error) {
    res.status(400).json({ message: 'Check the request body and try again', error });
  }
});

// GET route to fetch all wards
wardRoute.get('/', async (req, res) => {
  try {
    const wards = await getAllWards();
    if (wards.length > 0) {
      res.json({ message: "Found all wards data", data: wards });
    } else {
      res.json({ message: "Ward database is empty", data: [] });
    }
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error fetching wards", error });
  }
});

module.exports = { wardRoute };