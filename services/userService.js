const { models: { User } } = require('../models');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const updateUser = async (id, userInfo) => {
    await User.update(userInfo, {
        where: {
            id: id
        }
    });
    const user = await User.findOne({ 
        where: { 
            id: id, 
            username: userInfo.username,  
            contactNo: userInfo.contactNo, 
            email: userInfo.email,
            password: userInfo.password
        } 
    });
    return user;
};

const deleteUser = async (id) => {
    const user = await User.destroy( {
        where: {
            id: id
        }
    });
    return user;
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };