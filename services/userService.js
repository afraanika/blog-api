const _ = require('lodash');

const { models: { User, Blog } } = require('../models');
const { verifyToken } = require('../utils/jwtUtil');

const getAllUsers = async () => {
    const users = await User.findAll();
    return {
        statusCode: 401,
        message: users
    };
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    if(_.isEmpty(user))
        return {
            statusCode: 404,
            message: "User Not Found"
        }
    return {
        statusCode: 200,
        message: user
    };
}

const updateUser = async (headers, id, userInfo) => {
    const currentUser = verifyToken(headers);
    if(currentUser == undefined) return currentUser;
    const currentUserInfo = await User.findOne({
        where: {
            email: currentUser
        }
    });
    if(currentUserInfo == null || currentUserInfo.id != id)
        return {
            statusCode: 401,
            message: "Authorization Failed"
        };
    const user = await User.update(userInfo, {
        where: {
            id: id
        }
    });
    if(user[0])
        return {
            statusCode: 200,
            message: "User Updated"
        };
    return {
        statusCode: 404,
        message: "User Not Found"
    };
};

const deleteUser = async (headers, id) => {
    const currentUser = verifyToken(headers);
    if(currentUser == undefined || currentUser == null) return currentUser;
    const currentUserInfo = await User.findOne({
        where: {
            email: currentUser
        }
    });
    if(currentUserInfo == null || currentUserInfo.id != id)
        return {
            statusCode: 401,
            message: "Authorization Failed"
        };
    
    const user = await Blog.destroy({
        where: {
            authorEmail: currentUser
        }
    }).then(async () => {
        return await User.destroy( {
            where: {
                id: id
            }
        });
    })  
    if(user)
        return {
            statusCode: 204,
            message: "User Deleted"
        };
    return {
        statusCode: 404,
        message: "User Not Found"
    };
}

module.exports = { getAllUsers, getUserById, updateUser, deleteUser };