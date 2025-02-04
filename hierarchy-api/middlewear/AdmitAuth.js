const jwt = require("jsonwebtoken")

const AdminAuth=(req,res,next)=>{
    let token = req.header("Authorization")
    if (!token) {
        return res.status(200).json({msg:"token not found"})
    }
    let newtoken = token.slice(7,token.length)
    let decode = jwt.verify(newtoken,"abc")
    req.user = decode
    next();
}

module.exports = AdminAuth