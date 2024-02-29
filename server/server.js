const express = require("express");
const app = express()
const authRouter = require("./Router/auth-router")
const cors = require("cors")

app.use(cors())
const connect = require("./connect/connect")

app.use(express.json())

app.get("/api", (req, res)=>{
    res.send("OK");
})
app.use("/auth", authRouter)
const PORT  = process.env.PORT || 5002

connect().then(()=>{
    app.listen(PORT, ()=>{console.log(PORT);})
})

