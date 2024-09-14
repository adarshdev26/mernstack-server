const Itemsstore = require('../models/addicategory');


exports.createCategory = async (req, res) => {
    try {
      const { menuId, categoryTitle, categoryDescription, status } = req.body;
  console.log(req.body)
      const newMenu = new Itemsstore({
        menuId,
        categoryTitle,
        categoryDescription,
        status,
      });
  
      const savedItem = await newMenu.save();
      res.status(201).json(savedItem); // Return the newly created menu item
    } catch (error) {
      res.status(500).json({ message: 'Error creating items', error });
    }
  };


  exports.getCategoryAll = async (req, res) => {
    try {
      const { menuId } = req.params;
      const menu = await Itemsstore.find({ menuId });
  
      if (!menu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
  
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching menu', error });
    }
  };