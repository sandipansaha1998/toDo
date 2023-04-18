const express = require('express');
const router = express.Router();


const taskController = require('../controllers/taskController');




router.post('/create',taskController.create);
router.post('/toggle',taskController.toggleTask);
router.get('/delete',taskController.deleteTask);
module.exports = router;