const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()

const products =[
    {
        id: uuidv4(),
        name: "Apple kyna",
        image: "/static/media/kyna.38709bbbb67a3d7eecda.png",
        teksti: "Apple Pencil (2nd Generation)",
        price: 50
      },
      {
        id: uuidv4(),
        name: "Kiintolevy",
        image: "/static/media/kiintoLevy.46efd7ba6ef5b30fed43.png",
        teksti: "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
        price: 100
      },
      {
        id: uuidv4(),
        name: "naytto",
        image: "/static/media/naytto.8c041c123cc4a7b37fc3.png",
        teksti: "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for... ",
        price: 200
      },
      {
        id: uuidv4(),
        name: "Nappis",
        image: "/static/media/nappis.c0695e281f63f36cb58d.png",
        teksti: "Logitech MK270 Wireless Keyboard and Mouse Combo for Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia and Shortcut Keys, 2-Year Battery Life, for... ",
        price: 50
      },
];



// define the home page route

router.get('/',(req, res) => {
    res.json(products);
})

router.get('/:products', (req, res) => {
  //  console.log(req.params);
  //  console.log(reg.params.todoId);

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

  router.delete('/:products', (req, res) => {
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

  
})

router.post('/', (req, res) => {
    console.log(req.body);

   products.push({
        id: uuidv4(),
        name: req.body.name,
        teksti: req.body.teksti,
        price: req.body.price
    });

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