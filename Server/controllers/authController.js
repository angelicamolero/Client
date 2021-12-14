const User = require('../models/Users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
require('dotenv').config({ path: 'variables.env' });
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {
    //check if theres any error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //get email and password
    const { mail, password } = req.body;

    try {
        //check that the user is registered
        let user = await User.findOne({ mail });
        if (!user) {
            return res.status(400).json({ msg: 'The user does not exists'})
        }

        //check password
        const passCorrect = await bcryptjs.compare( password, user.password)
        if(!passCorrect) {
            return res.status(400).json({ msg: 'incorrect password '})
        }

        //all good create and sign jwt
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
    }
}