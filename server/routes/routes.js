const express = require("express");
const router = express.Router();


// controllers-------------------
const fetchProducts = require("../controllers/fetchProducts");
const signUp = require("../controllers/signUp");
const logIn = require("../controllers/logInUser");
const fetchProductDetails = require("../controllers/fetchProductDetails");
const buyProduct = require("../controllers/singleOrder");
const placeOrder = require("../controllers/placeOrder");
const orders = require("../controllers/orders");
// -----------------------------

router.get("/fetchProducts",fetchProducts)
router.post("/signup",signUp)
router.post("/login",logIn)
router.post("/productDetails", fetchProductDetails)
router.post("/buyProduct",buyProduct)
router.post("/placeOrder", placeOrder)
router.post("/orderHistory", orders)


module.exports = router