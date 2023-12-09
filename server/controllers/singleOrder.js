const Order = require("../models/order-model");

const buyProduct =  async (req,res)=>{
    const {username,product} = req.body;
    const date = new Date()

   
      product.purchasedDate = date;
  
    console.log(product);
   
    const data = await Order.findOne({username});
    if(!data){
       const data = new Order({username:username, orders:[product]})
       await data.save();
       console.log("Order Saved");
    }
    else{
        // retrieve it and push items
      data.orders.push(product)
      await data.save();
      console.log("product added");
       
    }
}

module.exports = buyProduct;