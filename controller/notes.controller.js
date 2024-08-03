const Model = require('../models/notes');

const postNotes = async (req, res) => {
  const data = new Model({
    text: req.body.text,
    // date: req.body.date,
  });
  try {
    const dataToSave = await data.save();
    if (dataToSave == null) {
      res.json({ message: 'enter a data to save', data: 'no data' });
    } else {
      res.json({
        message: 'data saved',
        data: dataToSave,
      });
    }
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
    // if (!req.params.id) {
    //   res.json({
    //     message: 'id not found',
    //   });
    // }
    const data = await Model.findByIdAndUpdate(req.params.id, req.body);
    if (data == null) {
      res.json({ message: 'nothing updated', data: 'no data' });
    } else {
      res.json({
        message: 'updated successfully',
        data: data,
      });
    }
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
