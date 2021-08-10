const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/api/users', userController.create_user);
router.get('/api/users', userController.get_users);

module.exports = router;