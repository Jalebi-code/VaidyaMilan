const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// creating doctor schema
const doctorSchema = new Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    // password: { type: String, required: true }
});


module.exports = mongoose.model("Doctor", doctorSchema)