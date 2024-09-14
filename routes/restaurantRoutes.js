const express = require('express');
const router = express.Router();
const { createRestaurant, getRestaurants, getRestaurentId } = require('../controllers/restaurantController');

// Route to create a new restaurant
router.post('/registerrestaurent', createRestaurant);

// Route to get all restaurants
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:_id', getRestaurentId);

module.exports = router;
