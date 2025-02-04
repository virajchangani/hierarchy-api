const AdminSchema = require("../model/AdminSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mailer = require("../middlewear/Mailer")
const ManagerSchema = require("../model/ManagerSchema")
const EmploySchema = require("../model/EmploySchema")

// module.exports.ManagerLogin=async(req,res)=>{
//     let user = await ManagerSchema.findOne({email:req.body.email})
//     if (user) {
//        if (await bcrypt.compare(req.body.password,user.password)) {
//         let token = jwt.sign({userdata:user},"def",{expiresIn:"1h"});
//         token && res.status(200).json({msg:"Login Sucsessful",token:token})
//        }else{
//         res.status(400).json({msg:"password is wrong"})
//        }
//     }else{
//         res.status(400).json({msg:"user not found"})
//     }
// }


module.exports.ManagerLogin=async(req,res)=>{
    let user = await ManagerSchema.findOne({email:req.body.email})
    if (user) {
       if (await bcrypt.compare(req.body.password,user.password)) {
        let token = jwt.sign({userdata:user},"abc",{expiresIn:"1h"});
        token && res.status(200).json({msg:"Login Sucsessful",token:token})
       }else{
        res.status(400).json({msg:"password is wrong"})
       }
    }else{
        res.status(400).json({msg:"user not found"})
    }
}




module.exports.ManagerDetail=async(req,res)=>{
    await ManagerSchema.find({}).then((data)=>{
        res.status(200).json({Details:data})
    })
}
module.exports.ChangeManPassword=async(req,res)=>{
    
    if (await bcrypt.compare(req.body.oldPassword,req.user.userdata.password)) {
        if (req.body.newPassword == req.body.confirmPassword) {
            let newPass = await bcrypt.hash(req.body.newPassword, 10)
             await ManagerSchema.findByIdAndUpdate(req.user.userdata._id, { password: newPass })
            res.status(200).json({ msg: "Password Change Succ" })
        }else{
            res.status(400).json({ msg: "New password and confirm password must be same" })
        }
    }else{
        res.status(400).json({ msg: "Password is wrong" })
    }
}

module.exports.forgetManagerPassword = async (req, res) => {
    let data = await ManagerSchema.findOne({ email: req.body.email })
    if (!data) {
        res.status(400).json({ msg: "email is wrong" })
    }
    let otp = Math.floor(Math.random() * 100000 + 900000);
    mailer.sendOtp(req.body.email, otp);
    res.cookie("otp", otp);
    res.status(200).json({ msg: "OTP sent successfully !" });
}
module.exports.RegisterEmploy=async(req,res)=>{
    let user = await EmploySchema.findOne({email:req.body.email})
    if (user) {
    res.status(200).json({msg:"Employ Alredy Exist"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10)
    await EmploySchema.create(req.body).then((data)=>{
        res.status(200).json({msg:"Employe Added"})
    })
}

module.exports.ViewEmployData=async(req,res)=>{
    await EmploySchema.find({}).then((data)=>{
        res.status(200).json({Data:data})
    })
}