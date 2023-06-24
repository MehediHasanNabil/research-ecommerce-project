const express = require("express");
const {
    getCartItems, getCartItem, updateCartItem, removeCartItem
} = require("../controllers/CartItem.controller");
const router = express.Router();

router.get("/", getCartItems);
router.get("/:cartItemId", getCartItem);
router.patch("/:cartItemId", updateCartItem);
router.delete("/:cartItemId", removeCartItem);

module.exports = router;
