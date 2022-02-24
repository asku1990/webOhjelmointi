const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()

const todos =[
    {
        "id": uuidv4(),
        "description": "Buy Milk",
        "dueDate": "2022-02-20",
        "isDone": true
    },
    {
        "id": uuidv4(),
        "description": "Learn Express",
        "dueDate": "2022-01-25",
        "isDone": false
    }
];



// define the home page route

router.get('/',(req, res) => {
    res.json(todos);
})

router.get('/:todoId', (req, res) => {
  //  console.log(req.params);
  //  console.log(reg.params.todoId);

  let foundIndex = -1;
  for(let i = 0; i < todos.length; i++){
    if (todos[i].id === req.params.todoId) {
        foundIndex = i;
        break;
    }
  }
  if(foundIndex === -1) {
      res.sendStatus(404);
  } else {
      res.json(todos[foundIndex]);
  }

  router.delete('/:todoId', (req, res) => {
    let foundIndex = -1;
    for(let i = 0; i < todos.length; i++){
      if (todos[i].id === req.params.todoId) {
          foundIndex = i;
          break;
      }
    }
    if(foundIndex === -1) {
        res.sendStatus(404);
    } else {
       todos.splice(foundIndex, 1);
       res.sendStatus(202);
    }
  })

  
})

router.post('/', (req, res) => {
    console.log(req.body);

    todos.push({
        id: uuidv4(),
        description: req.body.description,
        dueDate: req.body.dueDate,
        isDone: req.body.isDone
    });

    router.put('/:todoId', (req, res) => {
        let foundTodo = todos.find(t => t.id === req.params.todoId);
        if(foundTodo ) {

            foundTodo.description = req.body.description;
            foundTodo.dueDate = req.body.dueDate;
            foundTodo.isDone = req.body.isDone;

            res.sendStatus(202);
        }
        else {
            res.sendStatus(404)
        }
    })

    res.sendStatus(200);
});

module.exports = router