const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const { signUp, signIn } = require('../controllers/authController');


router.post('/auth/signup', signUp);
router.post('/auth/signin', signIn);

module.exports = router;