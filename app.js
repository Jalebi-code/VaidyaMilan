const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const Doctor = require('./models/Doctors');
const generateDoctors = require('./dummyDrGenerator/generateRandomDoctor');


//generate random doctors data
const insertDoctors = async () => {
    mongoose.connect(process.env.MONGO_URL)
    const doctors = generateDoctors(10); // Example: Generate 10 doctors
    console.log('Generated doctors:', doctors);
    mongoose.connection.close();
    try {
        const result = await Doctor.insertMany(doctors);
        console.log('Doctors inserted successfully', result);
    } catch (err) {
        console.error('Error inserting doctors', err);
    }
    
};

// Run the insertion to generate and insert ducuments(doctors list data) VaidyaMilan Collection in Database 
// insertDoctors();  // commented this out because already inserted doctors data in DB successfully

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




