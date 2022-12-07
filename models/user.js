module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', 
    {
        username: { 
           type: DataTypes.STRING,
           allowNull: false,
        },
        contactNo: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            msg: "Must be unique"
        },
        password:{ 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, ]
            }
        }
    },
    {});

    return User;
};