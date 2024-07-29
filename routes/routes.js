const express = require('express');
const router = express.Router();
const Model = require('../models/notes');

//post Method
router.post('/post', async (req, res) => {
  const data = new Model({
    text: req.body.text,
    date: req.body.date,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//get all method
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

//get by Id method
router.get('/get/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//update method
router.patch('/update/:id', async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
    console.log('updated');
  } catch (e) {
    res.status(500).json(e.message);
  }
});

//delete method
router.delete('/delete/:id', async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
