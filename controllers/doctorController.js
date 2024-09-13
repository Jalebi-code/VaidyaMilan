const Doctor = require('../models/Doctors');
const Services = require("../src/doctorServices");


// get all Doctors from database
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find().select("name");
        console.log(doctors);
        // const doctorNames = doctors.map(eachDoctor => eachDoctor.name)  // if in line 6 .select('name') not use use.map() 
        res.status(200).json(doctors);
        // console.log("only", doctorNames);
    } catch (err) {
        console.log("Error: ", err)
    }

}

exports.getDoctorProfile = async (req, res,) => {
    try {
        const doctor = await Doctor.findById(req.params.id).select("name specialization experience phone location ")  // Fetch the doctor by ID 
        if (!doctor) {
            return res.status(404).json({ message: "Couldn't find doctor " });
        }
        // Create the  doctor's profile response
        const response = {
            doctorProfile: doctor,
        };
        // send the doctor's profile
        res.status(200).json(response);


    } catch (err) {
        console.log("server error", err);
        res.status(500).json({ message: err.message });
    }
}

exports.getDoctorServices = async (req, res,) => {
    try {
        const doctor = await Doctor.findById(req.params.id)  // Fetch the doctor by ID 
        if (!doctor) {
            return res.status(404).json({ message: "Couldn't find doctor " });
        }
        const { specialization } = doctor   // Extract specialization from the doctor object
        console.log("specialization", specialization);

        const doctorService = Services[specialization] // Fetch services based on specialization

        const response = {
            services: doctorService ? doctorService : "No services found for this specialization"
        };

        res.status(200).json(response);

    } catch (err) {
        console.log("server service error", err);
        res.status(500).json({ message: "service error:", err });

    }
}

exports.getDoctorAvailability = async ( req,res) => {
    try {
        const doctor = await Doctor.findById(req.params.id)
        if(!doctor)
        {
            return res.status(404).json({ message: "Couldn't find doctor" });
        }
        const availability =doctor.availability
        if (availability) {
            return res.status(200).json({ 
                message:`Available for Consulting ${doctor.name}:`,
                days : availability.days,
                time : availability.time
            });
        }

    } catch (err) { 
        console.log("server availability error", err);
        res.status(500).json({ message: "availability error:", err });
}
}