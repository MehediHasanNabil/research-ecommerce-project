const CartModel = require("../models/Cart.model");
const CartItemModel = require("../models/CartItem.model");

async function getCarts(req, res, next) {
    try {
        const carts = await CartModel.find({})
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
        const { product_id, quantity } = req.body
        const { _id } = req.user

        const newCartItem = new CartItemModel({
            user_id: _id,
            product_id,
            quantity
        })

        await newCartItem.save()

        const newCart = new CartModel({
            user_id: _id,
            cart_item_id: newCartItem._id
        })

        await newCart.save()

    } catch (error) {
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