const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    const response = await userService.getAllUsers();
    res.status(response.statusCode).send(response.message);
};

const getUserById = async (req, res) => {
    const response = await userService.getUserById(req.params.id);
    res.status(response.statusCode).send(response.message);
};

const updateUser = async (req, res) => {  
    const response = await userService.updateUser(req.headers, req.params.id, req.body);
    if(response == undefined) res.status(400).send("Authorization Header Needed");
    res.status(response.statusCode).send(response.message);
};

const deleteUser = async (req, res) => {
    const response = await userService.deleteUser(req.headers, req.params.id);
    res.status(response.statusCode).send(response.message);
    
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };