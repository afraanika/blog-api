const blogService = require('../services/blogService');

const getAllblogs = async (req, res) => {
    const response = await blogService.getAllblogs();
    res.send(response);
};

const getBlogsByAuthorEmail = async (req, res) => {
    const response = await blogService.getBlogsByAuthorEmail(req.params.email);
    res.status(response.statusCode).send(response.message);
};

const addBlog = async (req, res) => {
    const response = await blogService.createBlog(req.headers, req.body);
    if(response == undefined) res.status(400).send("Authorization Header Needed");
    res.status(response.statusCode).send(response.message);
};

const updateBlog = async (req, res) => {
    const response = await blogService.updateBlog(req.headers, req.params.id, req.body);
    if(response == undefined) res.status(400).send("Authorization Header Needed");
    res.status(response.statusCode).send(response.message);
};

const deleteBlog = async (req, res) => {
    const response = await blogService.deleteBlog(req.headers, req.params.id);
    if(response == undefined) res.status(400).send("Authorization Header Needed");
    res.status(response.statusCode).send(response.message);
};

module.exports = { getAllblogs, getBlogsByAuthorEmail, addBlog, updateBlog, deleteBlog };