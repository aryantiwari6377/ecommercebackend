const mongoose = require("mongoose");
const dataschema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    imageUrl: String,
    details: {
        gender: String,
        subcategory: String
      }
})

module.exports = mongoose.model('testData',dataschema);