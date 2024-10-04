const Reservation = require('../models/Reservation');

class ReservationController {

    static async createReservation(req, res) {

        const { movieId, showtime, seats } = req.body;

        // const dd = req.user.id;
        // return res.status(201).json(dd);
        
        try {
            const reservation = await Reservation.create({
                user: req.user.id,
                movie: movieId,
                showtime,
                seats
            });
            return res.status(201).json(reservation);
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
        
    }

    static async getReservations(req, res) {

        try {
            const reservations = await Reservation.find().populate('movie');
            res.json(reservations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

}

module.exports = ReservationController;