const express = require('express');
const router = express.Router();
const passportLocal = require('../config/passport-local');
const passport = require('passport');
const homeController = require('../controllers/home_controller');
const accessController = require('../controllers/accessController');


// router.get('/',homeController.home);
// router.post('/add-task',homeController.addTask);
// router.post('/save',homeController.update_task_status);
// router.get('/delete-task',homeController.delete_task);
// router.post('/edit',homeController.update_task)

// Renders Home Page if authenticated else redirects to login page
router.get('/',passportLocal.checkAuthentication,homeController.home);
// Login Page
router.get('/login',accessController.renderLogin);
// Signup Page
router.get('/sign-up',accessController.renderSignUp);

router.use('/access',require('./access'));
router.use('/user',require('./user'));
router.use('/task',require('./task'));
module.exports = router;