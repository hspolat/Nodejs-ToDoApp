const express = require('express')
const taskController = require('../controllers/taskController');

const router = express.Router();

router.route('/tasks').post(taskController.createTask);
router.route('/tasks/:id').delete(taskController.deleteTask);


module.exports = router; 