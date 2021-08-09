const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/api/users', userController.create_user);

module.exports = router;