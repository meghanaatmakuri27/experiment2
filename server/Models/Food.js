const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String
});
module.exports = mongoose.model("foodproducts", productSchema); // Use "foodproducts" as the model name
