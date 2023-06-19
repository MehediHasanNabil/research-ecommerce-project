const { Schema, default: mongoose } = require("mongoose");

const paymentSchema = new Schema({
    // _id: Schema.Types.ObjectId,
}, { timestamps: true })

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel