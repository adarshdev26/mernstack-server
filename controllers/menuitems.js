// Import the Menustore model
const Menustore = require('../models/addmenu');

// Create a new menu item
exports.createMenu = async (req, res) => {
  try {
    const { restaurantId, menuTitle, menuDescription, status } = req.body;
console.log(req.body)
    const newMenu = new Menustore({
      restaurantId,
      menuTitle,
      menuDescription,
      status,
    });

    const savedMenu = await newMenu.save();
    res.status(201).json(savedMenu); // Return the newly created menu item
  } catch (error) {
    res.status(500).json({ message: 'Error creating menu', error });
  }
};

// Get all menu items
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menustore.find();
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menus', error });
  }
};

// Get a single menu item by ID
exports.getMenuById = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menu = await Menustore.find({ restaurantId });

    if (!menu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu', error });
  }
};

// Update a menu item by ID
exports.updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const { restaurantId, menuTitle, menuDescription, status } = req.body;

    const updatedMenu = await Menustore.findByIdAndUpdate(
      id,
      { restaurantId, menuTitle, menuDescription, status },
      { new: true, runValidators: true } // Options: return updated menu, validate input
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: 'Error updating menu', error });
  }
};

// Delete a menu item by ID
exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenu = await Menustore.findByIdAndDelete(id);

    if (!deletedMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting menu', error });
  }
};
