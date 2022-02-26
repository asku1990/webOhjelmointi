const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()

const products =[
    {
        id: uuidv4(),
        name: "Apple",
        price: 50
      },
      {
        id: uuidv4(),
        name: "Kyna",
        price: 100
      },
];

router.get('/',(req, res) => {
    res.json(products);
})


// hae tuote id.n mukaan
router.get('/:products', (req, res) => {

  let foundIndex = -1;
  for(let i = 0; i < products.length; i++){
    if (products[i].id === req.params.products) {
        foundIndex = i;
        break;
    }
  }
  if(foundIndex === -1) {
      res.sendStatus(404);
  } else {
      res.json(products[foundIndex]);
  }
})
// hae tuotenimen mukaan
router.get('/productsname/:productname', (req, res) => {
  //  console.log(req.params);
  //  console.log(reg.params.todoId);

  let foundIndex = -1;
  for(let i = 0; i < products.length; i++){
    if (products[i].name === req.params.productname) {
        foundIndex = i;
        break;
    }
  }
  if(foundIndex === -1) {
      res.sendStatus(404);
  } else {
      res.json(products[foundIndex]);
  }
})
//poista tuote
  router.delete('/:products', (req, res) => {
  //  let foundIndex = products.findIndex(i=> i.id === req.params.products);

    let foundIndex = -1;
    for(let i = 0; i < products.length; i++){
      if (products[i].id === req.params.products) {
          foundIndex = i;
          break;
      }
    }
    if(foundIndex === -1) {
        res.sendStatus(404);
    } else {
       products.splice(foundIndex, 1);
       res.sendStatus(202);
    }
  })

//lisää tuote
router.post('/', (req, res) => {
    console.log(req.body);

   products.push({
        id: uuidv4(),
        name: req.body.name,
        teksti: req.body.teksti,
        price: req.body.price
    });
//muokkaa tuotetta
    router.put('/:products', (req, res) => {
        let foundTodo = products.find(t => t.id === req.params.products);
        if(foundTodo ) {

            foundTodo.name = req.body.name;
            foundTodo.teksti = req.body.teksti;
            foundTodo.price = req.body.price;

            res.sendStatus(202);
        }
        else {
            res.sendStatus(404)
        }
    })

    res.sendStatus(200);
});

module.exports = router