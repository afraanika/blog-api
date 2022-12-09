const authService = require('../services/authService');

const register = async (req, res) => {
    const response = await authService.createUser(req.body);
    res.status(response.statusCode).send(response.message);
};
 
const signin = async (req, res) => {
    const response = await authService.signin(req.body);
    res.status(response.statusCode).send(response.message);
};

module.exports = { register, signin }