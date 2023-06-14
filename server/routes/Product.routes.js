const express = require("express");
const {
    getProducts, getProduct, addProduct, updateProduct, deleteProduct
} = require("../controllers/Product.controller");
const router = express.Router();

router.get("/", getProducts);
router.get("/:ProductId", getProduct);
router.post("/", addProduct);
router.patch("/:ProductId", updateProduct);
router.delete("/:ProductId", deleteProduct);

module.exports = router;
