module.exports = (sequelize, DataTypes) => {

    const Blog = sequelize.define('blog', 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: "Must not be null/empty",
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            msg: "Must not be null/empty",
            validate: {
                notEmpty: true
            }
        },
        authorEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            msg: "Must not be null/empty",
            validate: {
                notEmpty: true
            }
        }
    }, 
    {});

    Blog.associate = (models) => {
        Blog.belongsTo(models.User, {
          foreignKey: 'authorId'
        });
    }

    return Blog;
};