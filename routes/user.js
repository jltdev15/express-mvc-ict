const express = require("express");

const router = express.Router();
const UserController = require('../Controller/UserController');

router.get('/users', UserController.getUsers);
router.post('/register', UserController.registerUser);


module.exports = router; 