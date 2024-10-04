const express = require('express');
const router = express.Router();
const { addMovie, getMovies } = require('../controllers/movieController');
const authRoleMiddleware = require('../middlewares/authRoleMiddleware');

router.post('/addMovie', authRoleMiddleware(['admin']), addMovie); 
router.get('/getMovies', authRoleMiddleware(['client']), getMovies);

module.exports = router;