const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000

const app = express(),  
      DEFAULT_PORT  = 3000

const products = require('./routes/products')
const users = require('./routes/users')
const invoices = require ('./routes/invoices')
const shoppinki = require ('./routes/shoppinki')

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('build'))

app.use('/products', products)
app.use('/users', users)
app.use('/invoices', invoices)
app.use('/shoppinki', shoppinki)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})