const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  categoryId: {type: String, required:true},
  itemTitle: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemPrice: {type:Number, required:'true'},
  status: { type: String, required: true },
});



const Itemsstore = mongoose.model('itemTable', itemSchema);
module.exports = Itemsstore;
