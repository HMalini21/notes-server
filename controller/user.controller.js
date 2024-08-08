const Model = require('../models/user');
// const { useParams } = require('react-router-dom');

const postUser = async (req, res) => {
  const dataUser = new Model({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const dataUsersave = await dataUser.save();
    if (dataUser == null) {
      res.json({ message: 'enter a data to post', dataUser: 'no data' });
    } else {
      res.json({ message: 'data saved', dataUser: dataUsersave });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
  // process.on('uncaughtException', function (err) {
  //   console.log(err);
  // });
};

const getAllUser = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const getUserbyId = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body);
    if (data == null) {
      res.json({ message: 'no data to update', data: 'no data' });
    } else {
      res.json({
        message: 'successfully updated',
        data: data,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    if (data == null) {
      res.json({ message: 'id not found', data: 'no data' });
    } else {
      res.json({
        message: 'successfully deleted',
        data: data,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  postUser,
  getAllUser,
  getUserbyId,
  updateUser,
  deleteUser,
};
