const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// Create appointment Schema
const appointmentSchema = new Schema({
    
        userID: {
            type: Schema.Types.ObjectId, ref: 'User',
        },
        doctorID: {
            type: Schema.Types.ObjectId, ref: 'Doctor',
        },
        appointmentDate: {
            type: Date,
        },
        appointmentTime: {
            type: String,
        },
        consultingType: {
            type: String, enum: ['regular', 'online']
        }, // Type of consultation
        tokenNumber: { type: String }, // Unique token for appointment
        status: {
            type: String,
            enum: ['inprogress', 'pending', 'approved', 'rejected', 'completed'],
            default: 'inprogress'

        },

        patient: {
            name: {
                type: String,

            },
            age: {
                type: Number,

            },
            sex: {
                type: String,

            },
            weight: {
                type: Number,

            },
            complaint: {
                type: String,

            }

        },
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema)