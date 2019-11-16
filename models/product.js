let mongoose = require("mongoose");

let ProductSchema = new mongoose.Schema({
    category: String,
    name: String,
    price: Number,
    cover: String
});

module.exports = mongoose.model("Product", ProductSchema);