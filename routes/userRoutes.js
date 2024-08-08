const express = require('express');
const router = express.Router();
const {
  postUser,
  getAllUser,
  getUserbyId,
  updateUser,
  deleteUser,
} = require('../controller/user.controller');
const { userSchema, userUpdateschema } = require('../validation/user.schema');
const { validate } = require('../middlewares/validate.middleware');

router.post('/postUser', validate(userSchema), postUser);

router.get('/getUser', getAllUser);

router.get('/getUser/:id', getUserbyId);

router.patch('/updateUser/:id', validate(userUpdateschema), updateUser);

router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
