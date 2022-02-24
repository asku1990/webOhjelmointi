const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const products = require('./routes/products')
const users = require()


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/products', products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})