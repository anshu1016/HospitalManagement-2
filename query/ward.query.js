const { Ward } = require('../model/ward.model.js');

const getAllWards = async () => {
  try {
    const allWards = await Ward.find({});
    return allWards;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addWard = async (wardData) => {
  console.log(wardData);
  try {
    const newWard = new Ward(wardData);
    const savedWard = await newWard.save();
    return savedWard;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteWard = async (wardId) => {
  try {
    await Ward.findByIdAndDelete(wardId);
    const updatedWards = await Ward.find({});
    return updatedWards;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateWard = async (wardId, wardData) => {
  try {
    console.log(wardId, wardData);
    await Ward.findByIdAndUpdate(wardId, wardData, { new: true });
    const updatedWards = await Ward.find({});
    return updatedWards;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { addWard, updateWard, deleteWard, getAllWards };
