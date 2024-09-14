const Restaurant = require('../models/restaurant');

exports.createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRestaurentId = async (req, res) => {
  try {
    const { _id } = req.params;
    console.log('Received _id:', _id);



    const menu = await Restaurant.findById(_id);

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu', error });
  }
};
