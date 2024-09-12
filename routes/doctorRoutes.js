const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorProfile } = require('../controllers/doctorController');

router.get('/getDoctors', getDoctors); // list all doctors
router.get('/getDoctorProfile/:id', getDoctorProfile); // show the doctor profile

module.exports = router;