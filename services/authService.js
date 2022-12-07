const { models: { User } } = require('../models');

const createUser = (userInfo) => {
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

const signin = async (userInfo) => {
    const user = await User.findOne({
        where: {
            email: userInfo.email,
            password: userInfo.password
        }
    });
    return user;
       
};

module.exports = { createUser, signin };