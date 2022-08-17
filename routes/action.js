const express  = require('express');
const router = express.Router();

const actionController = require('../controllers/action_controller');

// Middleware to decode data coming from browser
router.use(express.urlencoded({ extended: true }));

//to handle create todo
router.post('/create-todo', actionController.create);

//to handle delete todo 
router.post('/delete-todo', actionController.delete);

//exporting the router
module.exports = router;