const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({

});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel

