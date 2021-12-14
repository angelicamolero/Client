//routes to create users
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const { check } = require('express-validator');

//create an user api/users
router.post('/',
[
    check('name', 'The name is required').not().isEmpty(),
    check('mail', 'The mail is not valid').isEmail(),
    check('password', 'Minimun 6 charactes for the password').isLength({ min: 6})
],
    userController.createUser
);
module.exports = router;