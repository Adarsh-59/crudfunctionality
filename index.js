const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


const product = require('./models/product');
const res = require('express/lib/response');
const { findById } = require('./models/product');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

main()
  .then(console.log('connected to database'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmsApp');
}

app.get('/products', async (req, res) => {
  const products = await product.find({});
  console.log(products)
  res.render('products/index', { products });
  
})

//code for making a new customer
app.get('/customers/new', async (req, res) => {

  res.render('products/new.ejs',);
})
app.post('/customers', async (req, res) => {
  console.log(req.body);
  const newProduct = new product(req.body);
  await newProduct.save();
  //res.send("making your product");
  res.redirect('/products')
})

//making route for each product
app.get('/customers/:id', async (req, res) => {
  const { id } = req.params;
  const findproduct = await product.findById(id);
  // console.log(`${findproduct}`);
  res.render('products/details.ejs', { findproduct })
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})