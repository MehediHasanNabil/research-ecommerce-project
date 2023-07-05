const CartItemModel = require("../models/CartItem.model")
const Format = require('response-format');
const ProductModel = require("../models/Product.model");

async function getCartItems(req, res, next) {
    try {
        const cart_items = await CartItemModel.find({}).populate(["product"])
        res.status(200).json(cart_items)
    } catch (error) {
        next(error)
    }
}

async function getCartItem(req, res, next) {
    try {
        const { cartItemId } = req.params || {};
        const cartItem = await CartItemModel.findById(cartItemId)
        res.status(200).json(cartItem)
    } catch (error) {
        next(error)
    }
} 

async function updateCartItem(req, res, next) {
    try {
        const { product_id, cartItem_id, quantity, type } = req.body

        const product = await ProductModel.findById(product_id)
        const newQuantity = product.quantity - 1
        if (0 <= newQuantity) {
            product.quantity = newQuantity
            await product.save()
        }

        const result = await CartItemModel.findByIdAndUpdate(cartItem_id, {
            $set: {
                quantity: type === "add" ? quantity + 1 : 0 <= quantity - 1 ? quantity - 1 : 0
            }
        })
        res.status(201).json(Format.success("Cart item update successful.", result))
    } catch (error) {
        next(error)
    }
}

async function removeCartItem(req, res, next) {
    try {
        const { cartItemId } = req.params || {};
        const result = await CartItemModel.deleteOne({ _id: cartItemId })
        res.status(200).json(Format.success("Product remove successful.", result))
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getCartItems,
    getCartItem,
    updateCartItem,
    removeCartItem
}