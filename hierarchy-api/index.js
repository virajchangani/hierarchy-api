const express = require("express")
const port = 7000;
const app = express()
const db = require("./config/db")
const cookie = require("cookie-parser")
app.use(express.urlencoded())
app.use("/",require("./Routes/AdminRout"))
app.use("/manager",require("./Routes/ManagerRout"))
app.use("/employe",require("./Routes/EmployRout"))
app.use(cookie())




app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at " + port);
})