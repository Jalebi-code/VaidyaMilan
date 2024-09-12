const generateRandomDoctor = () => {
    const prefix = ["Dr."];
    const firstName = ["Mukesh", "Pragati", "Priya", "Ankoor", "Prachi", "Preeti", "Jasmine", "Jetha", "Daya", "Babita"];
    const lastName = ["Aditya", "Sinha", "Singhaniya", "Jaisawal", "Kishor", "Gupta", "Soni", "Chandrakar", "Patel", "Chandra"];
    const specializations = ["Cardiologist", "Dermatologist", "Neurologist", "Pediatrician", "Orthopedic Surgeon"];
    const locations = ["Ambikapur", "Dhamtari", "Sakti", "Janjgir-Champa", "Raigarh", "Raipur", "Bilaspur", "Korba", "Katghora", "Bastar"];
    const state = ["Chhattisgarh"];

    // random value generator
    const randomValue = (array) => array[Math.floor(Math.random() * array.length)];

    //random phone number generator
    const randomPhone = () => `+91${Math.floor(1000000000 + Math.random() * 9000000000)}`


    const drNames = `${randomValue(prefix)} ${randomValue(firstName)} ${randomValue(lastName)}`;
    //random email generator
    const randomEmail = (drNames) => {
        const drname = drNames.replace("Dr.", "");
        const email = drname.toLowerCase().split(" ").join("") + "@gmail.com";
        return email;
    }



    return {
        name: drNames,
        specialization: randomValue(specializations),
        experience: Math.floor(Math.random() * 20),  // experiment between 0 and 20
        email: randomEmail(drNames),
        phone: randomPhone(),
        location: `${randomValue(locations)} ${state}`,

    }
};

const generateDoctors = (num) => {
    const doctors = [];
    for (let i = 0; i < num; i++) {
        doctors.push(generateRandomDoctor());
    }
    return doctors;
};


const mongoose = require('mongoose');
const Doctor = require('../models/Doctors');
const dotenv = require('dotenv');
dotenv.config();

//generate random doctors data
const insertDoctors = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("connection established")
        })
        .catch(err => console.log("connection error", err))

    const doctors = generateDoctors(10); // Example: Generate 10 doctors
    console.log('Generated doctors:', doctors);
  
    try {
        const result = await Doctor.insertMany(doctors);
        console.log('Doctors inserted successfully', result);
        mongoose.connection.close();
    } catch (err) {
        console.error('Error inserting doctors', err);
    }

};

// Run the insertion to generate and insert ducuments(doctors list data) VaidyaMilan Collection in Database
insertDoctors();



