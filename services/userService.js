const { models: { User } } = require('../models');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}
const addUser = (userInfo) => {
    if(!userInfo.username || !userInfo.contactNo || !userInfo.email || !userInfo.password) 
        return {};
    const response = User.create(userInfo)
                                    .then(() => {
                                        return {
                                            statusCode: 201,
                                            message: "User Created"
                                        };
                                    })
                                    .catch(err => {
                                        return {
                                            statusCode: 400,
                                            message: err.errors
                                        };
                                    });
    return response;
       
};

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

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser };