const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()

const invoices =[
    {
        id: uuidv4(),
        customer: "Matti",
        product: "Apple",
        price: "50"
      },
      {
        id: uuidv4(),
        customer: "Satu",
        product: "Kyna",
        price: "4000"
      },
      {
        id: uuidv4(),
        customer: "Matti",
        product: "Pensseli",
        price: "5"
      },
      {
        id: uuidv4(),
        customer: "Satu",
        product: "Maali",
        price: "400"
      }
];

const valiTaulu = [];

// hae kuitit

router.get('/',(req, res) => {
    res.json(invoices);
})
//hae kaikki kuitit käyttäjänimellä
router.get('/customername/:customername', (req, res) => {
  let foundIndex = -1;
  valiTaulu.splice(0,valiTaulu.length);

  for(let i = 0; i <invoices.length; i++){
    if (invoices[i].customer === req.params.customername) {
        foundIndex = i;
        valiTaulu.push ({
            id: uuidv4,
            customer: req.params.customer,
            product: invoices[i].product,
            price: invoices[i].price
        }) ;
    }
  }
  if(foundIndex === -1) {
      res.sendStatus(404);
  } else {
      res.json(valiTaulu);
  }
})

//hae kuitit kuitti idelllä
  router.get('/userinvoice/:invoiceid', (req, res) => {
    let foundIndex = -1;
   // console.log("fgg")
    for(let i = 0; i <invoices.length; i++){
      if (invoices[i].id === req.params.invoiceid) {
          foundIndex = i;
          break;
      }
    }
    if(foundIndex === -1) {
        res.sendStatus(404);
    } else {
        res.json(invoices[foundIndex]);
    }
})
//poista kuitit kuitti,id llä
  router.delete('/:invoiceid', (req, res) => {
    let foundIndex = -1;
    for(let i = 0; i < invoices.length; i++){
      if (invoices[i].id === req.params.invoiceid) {
          foundIndex = i;

          break;
      }
    }
    if(foundIndex === -1) {
        res.sendStatus(404);
    } else {
       invoices.splice(foundIndex, 1);
       res.sendStatus(202);
    }
  })
// lisää kuitti tai ostos
router.post('/', (req, res) => {
    console.log(req.body);

   invoices.push({
        id: uuidv4(),
        customer: req.body.customer,
        product: req.body.product,
        price: req.body.price
    });
    res.sendStatus(202);
});

module.exports = router