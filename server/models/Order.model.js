const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({

});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = OrderModel