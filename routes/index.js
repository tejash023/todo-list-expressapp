const express = require('express');
const router = express.Router();

const homeController  = require('../controllers/home_controller');

// Setting controller function to a route
router.get('/', homeController.home);

// Route all requests starting with '/action' to action.js file
router.use('/action', require('./action'));

// Exporting router
module.exports = router;

