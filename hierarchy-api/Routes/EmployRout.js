const express = require("express")
const ctl3 = require("../controller/EmployCtl")
const rout = express.Router()
const ManagerAuth = require("../middlewear/ManagerAuth")
const EmployAuth = require("../middlewear/EmployAuth")

rout.post("/employLogin",ctl3.EmployLogin)
rout.get("/viewEmploy",EmployAuth,ctl3.ViewEmploy)
rout.put("/changeEmployPass",EmployAuth,ctl3.ChangeEmployPass)
rout.post("/forgetEmployPass",ctl3.forgetEmployPassword)


module.exports = rout