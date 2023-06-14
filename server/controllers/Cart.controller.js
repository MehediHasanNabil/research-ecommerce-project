const CartModel = require("../models/Cart.model")

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
        const { product_id } = req.body
        const { _id } = req.user

        const newCart = new CartModel({
            user_id: _id,
            product_id
        })

        await newCart.save()

    } catch (error) {
        next(error)
    }
}




module.exports = {
    getCarts,
    getCart,
    addCart
}