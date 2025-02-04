const express = require("express")
const ctl2 = require("../controller/ManagerCtl")
const rout = express.Router()
const ManagerAuth = require("../middlewear/ManagerAuth")

rout.post("/managerLogin",ctl2.ManagerLogin)
rout.get("/managerDetail",ManagerAuth,ctl2.ManagerDetail)
rout.put("/changeManPass",ManagerAuth,ctl2.ChangeManPassword)
rout.post("/forgetManagerPass",ctl2.forgetManagerPassword)
rout.post("/employRegister",ManagerAuth,ctl2.RegisterEmploy)
rout.get("/ViewEmployData",ManagerAuth,ctl2.ViewEmployData)



module.exports = rout   