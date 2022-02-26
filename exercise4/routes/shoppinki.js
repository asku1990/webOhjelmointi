const express = require('express')
const { v4: uuidv4 } = require ('uuid');

const router = express.Router()
let fullPrice = 0;

const ostokset =[];

// tällä haetaan koko ostoskorin sisältö mukaanlukien kokonaishinta.
router.get('/',(req, res) => {
    res.json(ostokset);
})

// tällä luodaan ostoskoriin uusi ostos ja lisätään uuden tuotteen hinta edelliseen kokonaissummaan
router.post('/', (req, res) => {
    console.log(req.body);

let newFulPrice = fullPrice + req.body.price;
   ostokset.push({
        id: uuidv4(),
        customer: req.body.customer,
        product: req.body.product,
        price: req.body.price,
        fullPrice: newFulPrice
    });
    fullPrice = newFulPrice;
    res.sendStatus(202);
});

module.exports = router