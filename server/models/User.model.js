const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    cart_id: {
        type: Schema.Types.ObjectId,
        ref: "cart"
    }
}, { timestamps: true });

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel

