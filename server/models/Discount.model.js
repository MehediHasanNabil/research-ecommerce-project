const { Schema, default: mongoose } = require("mongoose");

const discountSchema = new Schema({

});

const DiscountModel = mongoose.model("discount", discountSchema);

module.exports = DiscountModel