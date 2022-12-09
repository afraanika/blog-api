const _ = require('lodash');
const { models: { User } } = require('../models');
const { generateToken } = require('../utils/jwtUtil');

const createUser = (userInfo) => {
    const response = User.create(userInfo)
        .then(() => {                         
            return {
                statusCode: 201,
                message: generateToken(userInfo.email)
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

const signin = async (userInfo) => {
    const user = await User.findOne({
            where: {
                email: userInfo.email,
                password: userInfo.password
            }
        });
    if(_.isEmpty(user))
        return {
            statusCode: 404,
            message: "User Not Found"
        };   
    return {
        statusCode: 200,
        message: generateToken(userInfo.email)
    }; 
};

module.exports = { createUser, signin };