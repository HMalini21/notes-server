const Model = require('../models/notes');

const postNotes = async (req, res) => {
  const data = new Model({
    text: req.body.text,
    // date: req.body.date,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllNotes = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const getNotesById = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const patchById = async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
    console.log('updated');
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    if (data == null) {
      res.json({ message: 'id not found', data: 'no data' });
    } else {
      res.json({ message: 'deleted successfully', data: data });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  postNotes,
  getAllNotes,
  getNotesById,
  patchById,
  deleteById,
};
