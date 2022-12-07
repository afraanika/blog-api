module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', 
    {
        username: { 
           type: DataTypes.STRING,
           allowNull: false,
           msg: "Must not be null/empty",
           validate: {
            notEmpty: true
           }
        },
        contactNo: { 
            type: DataTypes.STRING,
            allowNull: false,
            msg: "Must not be null/empty",
            validate: {
                notEmpty: true
            }
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
            msg: "Must be unique and not null/empty",
            validate: {
                isEmail: true, 
            }
        },
        password:{ 
            type: DataTypes.STRING,
            allowNull: false,
            msg: "Must not be null/empty",
            validate: {
                notEmpty: true,
                min: 8
            }
        }
    },
    {});

    return User;
};