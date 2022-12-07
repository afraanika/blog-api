const userService = require('../services/userService');
const _ = require('lodash');
const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.send(users);
};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if(_.isEmpty(user))
        res.send("User Not Found");
    else    
        res.send(user);
};


const updateUser = async (req, res) => {  
    const user = await userService.updateUser(req.params.id, req.body);
    if(!_.isEmpty(user)) 
        res.status(200).send(user);
    else
        res.status(404).send("User Not Found");   
};

const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.params.id);
    if(user)
        res.send("User Deleted");
    else 
        res.send("User Not Found");
};

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };