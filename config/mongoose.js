const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/todo_app_db');

//acquire the connection to check if it is connected successfully
const db = mongoose.connection;

//validate if error connecting
db.on('error', console.error.bind(console,'error connecting to db'));

//validate if connection successfull
db.once('open', function(){
  console.log('Successfully connected to the database');
})