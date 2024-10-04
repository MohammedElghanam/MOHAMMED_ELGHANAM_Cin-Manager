const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController')

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/forgotPassword', UserController.forgotPassword);
router.post('/resetPassword', UserController.resetPassword);

router.get('/getusers', UserController.getAllusers);


module.exports = router;