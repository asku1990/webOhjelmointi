const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const products = require('./routes/products')
const users = require('./routes/users')


app.use(bodyParser.json());

app.use('/products', products)
app.use('/users', users)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})