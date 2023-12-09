const express = require("express");
const dotenv = require("dotenv");
const Connection = require("./Database/Connection")
const defaultData =  require("./default")
const cors = require("cors")
const router = require("./routes/routes")

dotenv.config();

const app = express();

// .use

app.use(cors())
app.use(express.json())
app.use("/",router)
const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server started listening on PORT ${PORT}`);
})


Connection();
// defaultData();