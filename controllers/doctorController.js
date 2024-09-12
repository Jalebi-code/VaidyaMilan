const Doctor = require('../models/Doctors');

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

exports.getDoctorProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id)
        console.log("found", doctor);
        if(!doctor) {
           return res.status(404).json({message: "Couldn't find doctor "});
        }
        res.status(200).json(doctor);  // send doctor full profile

    } catch (err) {
        console.log("server error", err);
        res.status(500).json({message: err.message});
    }

    
}