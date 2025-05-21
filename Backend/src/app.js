const express = require("express");
const aiRoute = require("./routes/ai.routes")
const cors = require('cors')

const app = express();


app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello")
})


app.use(express.json())

app.use("/ai",aiRoute);

module.exports = app;