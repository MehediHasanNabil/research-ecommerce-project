const { Schema, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({

}, { timestamps: true });

const ReviewModel = mongoose.model("review", reviewSchema);

module.exports = ReviewModel