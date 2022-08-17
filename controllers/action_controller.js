//connect mongoose
const db = require('../config/mongoose');

// import database model
const TodoList = require('../models/todo_app');


//create todo list
module.exports.create = function(req,res){
  
  //to set up date or if user have no deadline
  var newDate;
  if(req.body.todoDate.length == 0){
    newDate ='No Deadline';
  }else{
    newDate = req.body.todoDate;
  }

  //populating the DB
  TodoList.create({
    todoDesc: req.body.todoDesc,
    todoCategory: req.body.todoCategory,
    todoDate: newDate
  }, function(err, newTodo){
    if(err){
      console.log('Error creating todo');
      return;
    }
    return res.redirect('back');
  })

  //saving data locally
  //todoAppData.push(req.body);
  //return res.redirect('/');
}


//delete todo list
module.exports.delete = function(req, res){
  
    //Nothing to Delete
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    //to delete one todo
    else if(typeof(req.body.id) == 'string'){
      TodoList.findByIdAndDelete(req.body.id, function(err){
        if(err){
          console.log("error deleting task ");
          return;
        }
        return res.redirect('back');
      });
    }
    //to delete several todo's
    else{
      for(let i of req.body.id){
        TodoList.findByIdAndDelete(i, function(err){
          if(err){
            console.log("error deleting tasks ");
            return;
          }
        });
      }
      return res.redirect('back');
    }
};