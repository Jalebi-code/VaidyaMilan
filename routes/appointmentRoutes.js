const express = require('express');
const router = express.Router();
const { bookAppointment } = require('../controllers/appointmentController');

router.post('/bookAppointment/:id', bookAppointment); //

module.exports = router;