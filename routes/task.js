const express = require('express');
const router = express.Router();


const taskController = require('../controllers/taskController');



// Create new Task
router.post('/create',taskController.create);
// Toggle task status
router.post('/toggle',taskController.toggleTask);
// Delete Task
router.get('/delete',taskController.deleteTask);

module.exports = router;
