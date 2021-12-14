//routes to auth users
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController')

//create an user api/users
router.post('/',
[
    check('mail', 'The mail is not valid').isEmail(),
    check('password', 'Minimun 6 charactes for the password').isLength({ min: 6})
],
    authController.authUser
);
module.exports = router;