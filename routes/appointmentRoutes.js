const express = require('express');
const router = express.Router();
const { bookAppointment, getUserAppointment } = require('../controllers/appointmentController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/bookAppointment/:id', bookAppointment);

// protected routes
router.get('/myAppointment', authenticateToken, getUserAppointment, async (req, res) => {
    try {
        const userid = req.user.userID;
        console.log("user ki id auth se nikli :", userid);
        const user = await User.findById(userid);
        console.log("user id se user ko nikale", user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
);

module.exports = router;