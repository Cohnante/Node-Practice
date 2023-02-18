const userController = require('../controllers/user.controller')

const express = require('express');
const router = express.router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/user-profile', userController.userProfile);

module.exports = router;