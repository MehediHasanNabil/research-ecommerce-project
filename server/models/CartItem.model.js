const { Schema, default: mongoose } = require("mongoose");

const cartItemSchema = new Schema({
   product: {
      type: Schema.Types.ObjectId,
      ref: "product"
   },
   quantity: {
      type: Number,
      required: true
   }
}, { timestamps: true });

const CartItemModel = mongoose.model("cart_item", cartItemSchema);

module.exports = CartItemModel