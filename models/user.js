module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', 
    {
        username: DataTypes.STRING,
        contactNo: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATEONLY
    },
    {});

    return User;
};