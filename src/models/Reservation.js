const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  showtime: { type: Date },
  seats: [{ type: String }]
});

module.exports = mongoose.model('Reservation', reservationSchema);
