const express = require('express');
const router = express.Router();
const {
  getAllNotes,
  getNotesById,
  patchById,
  deleteById,
  postNotes,
} = require('../controller/notes.controller');
const notesSchema = require('../validation/notes.schema');
const { validate } = require('../middlewares/validate.middleware');

//post Method
router.post('/post', validate(notesSchema), postNotes);

//get all method
router.get('/getAll', getAllNotes);

//get by Id method
router.get('/get/:id', getNotesById);

//update method
router.patch('/update/:id', patchById);

//delete method
router.delete('/delete/:id', deleteById);

module.exports = router;
