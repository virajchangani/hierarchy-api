const jwt = require("jsonwebtoken");

const ManagerAuth = (req, res, next) => {
    let token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ msg: "Token not found" });
    }

    let newToken = token.slice(7, token.length); 

    try {
     
        let decoded = jwt.verify(newToken, "def");
        req.user = decoded;
        next(); 
    } catch (err) {
        try {
          
            let decoded = jwt.verify(newToken, "abc");
            req.user = decoded;
            next(); 
        } catch (err) {
       
            return res.status(403).json({ msg: "Invalid token" });
        }
    }
};

module.exports = ManagerAuth;
