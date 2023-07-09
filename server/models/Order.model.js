const { Schema, default: mongoose } = require("mongoose");

const states = ["processing", "shipped", "delivered"]

const orderSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    cart: {
        type: [Schema.Types.ObjectId],
        ref: "cart"
    },
    total_price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: states,
        default: "processing",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel