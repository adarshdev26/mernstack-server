const express = require('express');
const { loginUser } = require('../controllers/loginController');

const router = express.Router();

// POST request to register a new user
router.post('/login', loginUser);

module.exports = router;
