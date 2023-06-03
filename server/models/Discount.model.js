const { Schema, default: mongoose } = require("mongoose");

const discountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
    }
});

const DiscountModel = mongoose.model("discount", discountSchema);

module.exports = DiscountModel