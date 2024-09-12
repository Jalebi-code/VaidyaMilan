const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const authRoutes = require('./routes/authRoutes');

dotenv.config();
app.use(express.json());



//connect ot DB 
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connection established")
    })
    .catch(err => console.log("connection error", err))


// use auth routes
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {

    res.send("welcome to Vaidya Milan")
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)  // Server is running on port 3000
})




