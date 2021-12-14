const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    //read header token
    const token = req.header('x-auth-token');

    //check if theres no token
    if(!token){
        return res.status(401).json({msg: 'theres no token permission denied'})
    }

    //validate token
    try {
        const verified = jwt.verify(token, process.env.SECRET)
        req.user = verified.user
        next();
        
    } catch (error) {
        res.status(401).json({msg: 'token no valid'})
    }
}