const express = require('express');
const router = express.Router();
const {createCategory} = require("../controllers/categoryadd");
const {getCategoryAll} = require("../controllers/categoryadd");

// Route to create a new menu item
router.post('/addcategory', createCategory);
router.get('/getcategory/:menuId', getCategoryAll);

module.exports = router;

