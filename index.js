//require express
const express = require('express');
const port = 8000;


const app = express();

// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');
// Setting path for views
app.set('views', './views');

// to use static files, present in assets directory
app.use(express.static('assets'));

//starting a server
app.listen(port,function(err){
  if(err){
    console.log('Error connecting to the server');
    return;
  }

  console.log('Successfully connected to the server at port: ' + port);
});










