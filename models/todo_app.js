const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoDesc:{
    type:'String',
    required: true
  },
  todoCategory:{
    type:'String',
    required:true
  },
  todoDate:{
    type:'String',
    required:true
  }
})

const TodoList = mongoose.model('TodoList', todoSchema);

module.exports = TodoList;