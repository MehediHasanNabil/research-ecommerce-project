const express = require("express");
const {
  getCarts,
  getCart,
  addCart,
  updateCart,
  deleteCart
} = require("../controllers/Cart.controller");
const router = express.Router();

router.get("/", getCarts);
router.get("/:cartId", getCart);
router.post("/", addCart);
router.patch("/:cartId", updateCart);
router.delete("/:cartId", deleteCart);

module.exports = router;
