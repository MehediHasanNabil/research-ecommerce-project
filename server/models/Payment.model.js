const { Schema, default: mongoose } = require("mongoose");

const paymentSchema = new Schema({

}, { timestamps: true })

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel