const express = require('express');
const router = express.Router();
const {createMenu} = require("../controllers/menuitems");
const {getMenuById} = require("../controllers/menuitems");

// Route to create a new menu item
router.post('/addmenu', createMenu);
router.get('/menu/:restaurantId', getMenuById);

module.exports = router;
