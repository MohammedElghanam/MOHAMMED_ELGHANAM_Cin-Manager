const express = require('express');
const router = express.Router();
const { addMovie, getMovies } = require('../controllers/movieController');
const { verifyToken } = require('../middlewares/authMiddleware');

router.post('/addMovie', verifyToken); 
router.get('/getMovies', getMovies);

module.exports = router;