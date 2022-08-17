// import database model
const TodoList = require('../models/todo_app');

//setting colors for category types
var colorCategory = {
  Personal: 'orangered',
  Work: 'darkmagenta',
  College: 'green',
  Others: 'black'
} 

// controller function for route '/'
module.exports.home = function(req, res){
  //fetching and displaying data from db
  TodoList.find({},function(err,todo){
    if(err){
      console.log('Error fetching details from DB');
      return;
    }
    return res.render('index',{
      TodoList : todo,
      color_list: colorCategory
    });
  });
}

