const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()

const users =[
    {
        id: uuidv4(),
        fName: "Matti",
        sName: "Miettinen",
      },
      {
        id: uuidv4(),
        fName: "Satu",
        sName: "Setä",
      },
];

// define the home page route

router.get('/',(req, res) => {
    res.json(users);
})

router.get('/:users', (req, res) => {
  //  console.log(req.params);
  //  console.log(reg.params.todoId);

  let foundIndex = -1;
  for(let i = 0; i <users.length; i++){
    if (users[i].id === req.params.users) {
        foundIndex = i;
        break;
    }
  }
  if(foundIndex === -1) {
      res.sendStatus(404);
  } else {
      res.json(users[foundIndex]);
  }

  router.delete('/:users', (req, res) => {
    let foundIndex = -1;
    for(let i = 0; i < users.length; i++){
      if (users[i].id === req.params.users) {
          foundIndex = i;
          break;
      }
    }
    if(foundIndex === -1) {
        res.sendStatus(404);
    } else {
       users.splice(foundIndex, 1);
       res.sendStatus(202);
    }
  })

  
})

router.post('/', (req, res) => {
    console.log(req.body);

   users.push({
        id: uuidv4(),
        fName: req.body.fName,
        sName: req.body.sName
    });

    router.put('/:users', (req, res) => {
        let foundTodo = users.find(t => t.id === req.params.users);
        if(foundTodo ) {

            foundTodo.fName = req.body.fName;
            foundTodo.sName = req.body.sName;

            res.sendStatus(202);
        }
        else {
            res.sendStatus(404)
        }
    })

    res.sendStatus(200);
});

module.exports = router