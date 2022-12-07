const authService = require('../services/authService');
const _ = require('lodash');

const register = async (req, res) => {
    const response = await authService.createUser(req.body);
    res.status(response.statusCode).send(response.message);
};
 
const signin = async (req, res) => {
    const user = await authService.signin(req.body);
    if(_.isEmpty(user))
        res.status(404).send("User Not Found");  
    else  
        res.status(200).send("Signed In");
};

module.exports = { register, signin }