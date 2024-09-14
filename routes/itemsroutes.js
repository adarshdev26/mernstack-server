const express = require('express');
const router = express.Router();
const {createItem} = require("../controllers/itemsadd");
const {getItemsAll} = require("../controllers/itemsadd")

// Route to create a new menu item
router.post('/additem', createItem);
router.get('/item/:categoryId', getItemsAll);

module.exports = router;
