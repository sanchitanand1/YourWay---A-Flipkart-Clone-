const Order = require("../models/order-model");
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_API_KEY,
  key_secret: process.env.RAZOR_PAY_API_SECRET,
});

const buyProduct = async (req, res) => {
  const {  product } = req.body;
  



  const options = {
    amount: Number(product.price.cost) * 100,
    currency: "INR"
  }

  const order = await instance.orders.create(options);

  res.status(200).json({ order: order, key: process.env.RAZOR_PAY_API_KEY});

  
}

module.exports = buyProduct;