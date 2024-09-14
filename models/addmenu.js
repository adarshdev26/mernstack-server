const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  restaurantId: {type: String, required:true},
  menuTitle: { type: String, required: true },
  menuDescription: { type: String, required: true },
  status: { type: String, required: true },
});



const Menustore = mongoose.model('Menutable', menuSchema);
module.exports = Menustore;
