const CartModel = require("../models/Cart.model");
const CartItemModel = require("../models/CartItem.model");
const UserModel = require("../models/User.model");
const Format = require('response-format');

async function getCarts(req, res, next) {
    try {
        const carts = await CartModel.find({}).populate(["user", "cart_item"])
        res.status(200).json(carts)
    } catch (error) {
        next(error)
    }
}

async function getCart(req, res, next) {
    try {
        const { cartId } = req.params || {};
        const cart = await CartModel.findById(cartId)
        res.status(200).json(cart)
    } catch (error) {
        next(error)
    }
}

async function addCart(req, res, next) {
    try {
        const { product_id, email } = req.body

        const user = await UserModel.findOne({ email })

        const newCartItem = new CartItemModel({
            product: product_id,
            quantity: 1
        })

        await newCartItem.save()

        const newCart = new CartModel({
            user: user._id,
            cart_item: newCartItem._id
        })

        await newCart.save()

        res.status(201).json(Format.success("Product add successful.", newCart))

    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function updateCart(req, res, next) {
    try {
        const { product_id, quantity } = req.body;

    } catch (error) {
        next(error)
    }
}

async function deleteCart(req, res, next) {
    try {
        const { cartId } = req.params || {};
        await CartModel.deleteOne({ _id: cartId })
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getCarts,
    getCart,
    addCart,
    updateCart,
    deleteCart
}