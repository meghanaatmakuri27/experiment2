const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String
});
module.exports = mongoose.model("Cart", CartSchema);