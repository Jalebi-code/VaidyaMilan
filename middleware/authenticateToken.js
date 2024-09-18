const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');

const User = require('../models/User');

dotenv.config();


// middleware function to protect routes
const authenticateToken = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    console.log("split token", token);

    if (!token) {
        res.status(401).json({ message: "no token provided" });

    }

    // verify token
    const decode = JWT.verify(token, process.env.SECRET_KEY);
    console.log("decode", decode);


    JWT.verify(token, process.env.SECRET_KEY, async (err, user) => {
        if (err) {
            // res.status(403).json({ message: "invalid token" });
        }
      
        //  attach user to request 
        req.user = user;
        next();
    });


}

module.exports = authenticateToken;