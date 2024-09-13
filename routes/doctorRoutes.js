const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorProfile, getDoctorServices , getDoctorAvailability } = require('../controllers/doctorController');

router.get('/getDoctors', getDoctors); // list all doctors
router.get('/getDoctorProfile/:id', getDoctorProfile); // show the doctor profile by id
router.get('/getDoctorServices/:id', getDoctorServices); // get the doctor services by id 
router.get('/getDoctors/:id/availability', getDoctorAvailability) // get the doctor availability by id

module.exports = router;