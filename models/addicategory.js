const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  menuId: {type: String, required:true},
  categoryTitle: { type: String, required: true },
  categoryDescription: { type: String, required: true },
  status: { type: String, required: true },
});



const Itemsstore = mongoose.model('categoryTable', itemsSchema);
module.exports = Itemsstore;
