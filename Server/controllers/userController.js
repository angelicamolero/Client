const User = require('../models/Users');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

exports.createUser = async (req, res) => {

    //check if theres any error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //extract email and password
    const { mail, password } = req.body;
    
    try {
        let user = await User.findOne({ mail });

        if(user){
            return res.status(400).json({ msg: 'the user already exists'});
        }

        //create new user
        user = new User(req.body);
        
        //Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        res.json({ msg: 'user created correctly'});

        //save user
        await user.save();

        //create and sign jwt
        const payload = {
            user: {
                id: user.id
            }
        };
        //sign token
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;

            res.json({ token });
        })

        
    } catch (error) {
        console.log(error)
        res.status(400).send('theres a mistake');
    }
}