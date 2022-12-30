const mongoose = require('mongoose');
const product = require('./models/product');



main()
    .then(console.log('connected to database'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/farmsApp');
}

product.insertMany([
    { name: 'Apple', price: '200', category: 'fruit' },
    { name: 'Mango', price: '100', category: 'fruit' },
    { name: 'Potato', price: '25', category: 'vegetable' },
    { name: 'Milk', price: '70', category: 'dairy' },
    { name: 'Brinjal', price: '30', category: 'vegetable' }]
).then(() => {
    console.log("inserted the temp data");
})
    .catch(err => {
        console.log('error in inserting temp data');
        console.log(err);
    })