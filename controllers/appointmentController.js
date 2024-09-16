const Doctors = require('../models/Doctors');
const User = require('../models/User');
const Appointment = require('../models/Appointment');



// API for book Appointment
exports.bookAppointment = async (req, res) => {
    try {
        const userid =  req.params.id;
        if (!userid) {
            return res.status(400).json({ message: "User ID is required" });
        }
         // check user is available 
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
       
        const { doctorID, userID, appointmentDate, appointmentTime, consultingType } = req.body;

        // find doctor by iD 
        const doctor = await Doctors.findById(doctorID);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }


        // check doctor availability
        const isDoctorAvailable = doctor.availability.time;
        if (!isDoctorAvailable) {
            return res.status(400).json({ message: "Doctor is not available at this time" });
        }

        // generate unique token for appointment
        const tokenNumber = `APPT-${Math.floor(1 + Math.random() * 900)}`;

        // create new appointment document in database
        const newAppointment = new Appointment({
            doctorID,
            userID,
            appointmentDate,
            appointmentTime,
            consultingType,
            tokenNumber

        })
        // save appointment in database
        await newAppointment.save();

        res.status(201).json( {
            message: "Appointment booked successfully",
            appointment: newAppointment
        })

    } catch (err) {
        console.log('Error Booking appointment ', err);
        res.status(500).json({ message: "An error occurred while booking an appointment", error: err.message });
    }
}


