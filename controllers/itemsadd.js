const Itemsstore = require('../models/additem');


exports.createItem = async (req, res) => {
    try {
      const { categoryId, itemTitle, itemDescription, itemPrice, status } = req.body;
      const newMenu = new Itemsstore({
        categoryId,
        itemTitle,
        itemDescription,
        itemPrice,
        status,
      });
  
      const savedItem = await newMenu.save();
      res.status(201).json(savedItem); // Return the newly created menu item
    } catch (error) {
      res.status(500).json({ message: 'Error creating items', error });
    }
  };


  exports.getItemsAll = async (req, res) => {
    try {
      const { categoryId } = req.params;
      const item = await Itemsstore.find({ categoryId });
  
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching item', error });
    }
  };