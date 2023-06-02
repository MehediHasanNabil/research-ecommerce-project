const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({

});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel