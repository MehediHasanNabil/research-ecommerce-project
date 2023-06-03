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







    active: {
        type: Boolean,
        default: true
    },
    category_id: {
        type: [Schema.Types.ObjectId],
        ref: "category",
    },
    discount_id: {
        type: [Schema.Types.ObjectId],
        ref: "discount",
    },
    review_id: {
        type: [Schema.Types.ObjectId],
        ref: "review"
    }
}, { timestamps: true });

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel