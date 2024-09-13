const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create appointment Schema
const appointmentSchema = new Schema (
    {
        patientName: {
            type: String,
            required: true
        },
        doctorName: {
            type: String,
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        appointmentTime: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: 'pending'
        }
    }
)

module.exports = mongoose.model("Appointment",appointmentSchema)