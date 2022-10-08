const express = require("express");
const path = require("path");
require("dotenv").config();
const myRouter = require("./routes/index")
const app = express();
const PORT = process.env.PORT;

app.use("/app", myRouter());



//public folder config 

app.use(express.static(path.join(__dirname,"public")))
//ejs config 

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(PORT,()=>console.log(`this is in port ${PORT}`));