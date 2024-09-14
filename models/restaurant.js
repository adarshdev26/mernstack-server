const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  cuisine: { type: String, required: true },
  website: { type: String },
  operatingDays: { type: [String], required: true },
  restaurantName: { type: String, required: true },
  restaurantDescription: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  minDeliveryAmount: { type: Number, required: true },
  freeDeliveryAmount: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  deliveryRadius: { type: Number, required: true },
  deliveryTimes: {
    Monday: { start: Date, end: Date },
    Tuesday: { start: Date, end: Date },
    Wednesday: {start:Date, end: Date},
    Thursday: {start:Date, end: Date},
    Friday: {start:Date, end: Date},
    Saturday: {start:Date, end: Date},
    Sunday: {start:Date, end: Date},

  },
  serviceType: { type: String, required: true },
  status: { type: String, required: true },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
