const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    category_id: {
        type: [Schema.Types.ObjectId],
        ref: "category",
    },
    review_id: {
        type: [Schema.Types.ObjectId],
        ref: "review"
    }
}, { timestamps: true });

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel