const express = require('express');
const { createUser } = require('../controllers/registerController');
const { getUsers } = require('../controllers/getRegisterusers');

const router = express.Router();

// POST request to register a new user
router.post('/register', createUser);
router.get('/getregisterusers', getUsers);

module.exports = router;
