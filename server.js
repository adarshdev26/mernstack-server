// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuitemsRoutes = require('./routes/menuroutes');
const categoryRoutes = require('./routes/categoryroutes')
const itemRoutes = require("./routes/itemsroutes")
const menuRoutes = require("./routes/menuroutes")
 const dbconnect = require('./config/db');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

// Connect to the MongoDB database
dbconnect();
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json()); 

// Register routes
app.use('/api', registerRoutes);
app.use('/api', loginRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', menuitemsRoutes);
app.use('/api', categoryRoutes);
app.use('/api', itemRoutes);
app.use('/api', menuRoutes);
app.use('/api', menuRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
