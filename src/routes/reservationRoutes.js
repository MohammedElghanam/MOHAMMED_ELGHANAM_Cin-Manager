const express = require('express');
const router = express.Router();
const { createReservation, getReservations } = require('../controllers/reservationController');
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');

router.post('/', authRoleMiddleware(['admin']), createReservation);
router.get('/', authRoleMiddleware(['admin', 'client']), getReservations);

module.exports = router;
