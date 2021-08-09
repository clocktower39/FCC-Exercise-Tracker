const express = require('express');
const exerciseController = require('../controllers/exerciseController');

const router = express.Router();

router.post('/api/users/:_id/exercises', exerciseController.create_exercise);
router.get('/api/users/:_id/logs', exerciseController.get_exercises);

module.exports = router;