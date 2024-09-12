const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const secret_key = process.env.SECRET_KEY;

// create Signup function
exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // check if user already exists
        let user = await User.findOne({ email: email });
        console.log(user, "hello");
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // new user create 
        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 10),  // hash of password
        });
        console.log(user, "new user");

        await user.save(); // save user to database

        // Generate JWT token
        const token = jwt.sign({ userID: user.id }, secret_key, { expiresIn: '1h' });

        res.status(201).json({
            message: 'User registered successfully',
            token
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

}



// sign in funtion

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if user already exists
        const user = await User.findOne({ email });

        // if user not found, 
        if (!user) {
            res.status(404).json({ message: " invalid credentials" });
        }

        // check password
        const ispasswordMatch = await bcrypt.compare(password, user.password);

        if (!ispasswordMatch) {
            return res.status(400).json({ message: " password does not match" });
        }

        // generate jwt  token 

        const token = jwt.sign({ userID: user.id }, secret_key, { expiresIn: "1h" });
        res.status(200).json({ message: " SignIn successful", token: token });

    } catch (err) {
        res.status(500).json({ message: " Server error", err });

    }

}

