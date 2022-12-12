const _ = require('lodash');

const { models: { Blog }} = require('../models');
const  {verifyToken } = require('../utils/jwtUtil');

const getAllblogs = async () => {
    const blogs =  await Blog.findAll();
    return blogs;
};

const getBlogsByAuthorEmail = async (email) => {
    const blogs = await Blog.findAll( {
        where: {
            authorEmail: email
        }
    });
    if(_.isEmpty(blogs))
        return {
            statusCode: 404,
            message: "No Story Found"
        }
    return {
        statusCode: 200,
        message: blogs
    };
}

const createBlog = async (headers, blogDetails) => {
    const currentUser = verifyToken(headers);
    if(currentUser == undefined) return currentUser;
    const response = await Blog.create({
        title: blogDetails.title,
        description: blogDetails.description,
        authorEmail: currentUser
    })
    .then(() => {
        return {
            statusCode: 201,
            message: "Blog Added"
        };
    })
    .catch((err) => {
        return {
            statusCode: 400,
            message: err.errors
        };
    });
    return response;
};

const updateBlog = async (headers, id, blogDetails) => {
    const currentUser = verifyToken(headers);
    if(currentUser == undefined) return currentUser;
    const blog = await Blog.update(blogDetails, {
        where: {
            id: id,
            authorEmail: currentUser
        }
    });
    if(blog[0])
        return {
            statusCode: 200,
            message: "Blog Updated"
        };
    return {
        statusCode: 404,
        message: "Blog Not Found"
    };
};

const deleteBlog = async (headers, id) => {
    const currentUser =  verifyToken(headers);
    if(currentUser == undefined) return currentUser;
    const blog = await Blog.destroy({ 
        where: {
            id: id,
            authorEmail: currentUser
        }
    });
    if(blog)
        return {
            statusCode: 204,
            message: "Blog Deleted"
        };
    return {
        statusCode: 404,
        message: "Blog Not Found"
    };
}

module.exports= { getAllblogs, getBlogsByAuthorEmail, createBlog, updateBlog, deleteBlog };