const jwt = require('jsonwebtoken');
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const generateToken = (email) => { 
    return {
        accessToken: jwt.sign(email, ACCESS_TOKEN_SECRET)
    };
};

const verifyToken = (headers) => {
    const authHeader = headers['authorization'];
    if(authHeader == undefined) return authHeader;
    const token = authHeader.split(' ')[1];
    const email = jwt.verify(token, ACCESS_TOKEN_SECRET, (err, userEmail) => {
        if(err) return err;
        return userEmail;
    });
    return email;
};


module.exports = { generateToken, verifyToken };