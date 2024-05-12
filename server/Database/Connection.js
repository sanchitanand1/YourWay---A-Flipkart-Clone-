const mongoose = require("mongoose");
 const Connection  = async ()=>{

    try{
       
     const connect = await mongoose.connect("mongodb+srv://anandsanchit198:1234@cluster0.1ba49ve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
     console.log("DataBase Connected Successfully")
    }
    catch(e){
        console.log(`DataBase Connection Error ${e}`)
    }

}

module.exports = Connection;