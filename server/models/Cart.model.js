const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    cart_item_id: {
        type: Schema.Types.ObjectId,
        ref: "cart_item"
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const CartModel = mongoose.model("cart", cartSchema);

module.exports = CartModel