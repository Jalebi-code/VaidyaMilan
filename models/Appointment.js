const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// Create appointment Schema
const appointmentSchema = new Schema(
    {
        userID: {
            type: Schema.Types.ObjectId, ref: 'User',
            required: true
        },
        doctorID: {
            type: Schema.Types.ObjectId, ref: 'Doctor',
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
        consultingType: { type: String, enum: ['regular', 'online'], required: true }, // Type of consultation
        tokenNumber: { type: String, required: true }, // Unique token for appointment
        status: {
            type: String,
            enum: ['inprogress', 'pending', 'approved', 'rejected', 'completed'],
            default: 'inprogress'

        }
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)