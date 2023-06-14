const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel

