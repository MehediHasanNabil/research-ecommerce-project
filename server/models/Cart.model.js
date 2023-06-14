const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "product"
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel