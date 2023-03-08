const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');



router.get('/',homeController.home);
router.post('/add-task',homeController.addTask);
router.post('/save',homeController.update_task_status);
router.get('/delete-task',homeController.delete_task);
router.post('/edit',homeController.update_task)
module.exports = router;