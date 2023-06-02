const { Schema, default: mongoose } = require("mongoose");

const paymentSchema = new Schema({

}, { timestamps: true })

const PaymentModel = mongoose.model("category", paymentSchema);

module.exports = PaymentModel