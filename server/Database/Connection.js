const mongoose = require("mongoose");
 const Connection  = async ()=>{

    try{
       
     const connect = await mongoose.connect("mongodb+srv://ridhamanand31:Lionelmessi10@flipkartclone.kjph07z.mongodb.net/?retryWrites=true&w=majority")
     console.log("DataBase Connected Successfully")
    }
    catch(e){
        console.log(`DataBase Connection Error ${e}`)
    }

}

module.exports = Connection;