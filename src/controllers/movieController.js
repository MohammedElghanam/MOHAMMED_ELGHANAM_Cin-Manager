const Movie = require('../models/Movie');

class MovieController{

    static async addMovie(req, res) {

        const { title, description, duration, releaseDate } = req.body;
        try {
            const movie = await Movie.create({ title, description, duration, releaseDate });
            return res.status(201).json(movie);
        } catch (error) {
           return res.status(400).json({ message: error.message });
        }

    }

    static async getMovies(req, res) {

        try {
            const movies = await Movie.find();
            return res.json(movies);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }

    }
}

module.exports = MovieController;