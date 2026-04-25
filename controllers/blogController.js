const Blog = require('../models/blogModel');


const createBlog = async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const blog = await Blog.create({ title, description, author });
        res.status(201).json({
            success: true,
            message: 'Blog created successfully',
            data: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            data: blogs
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            data: blog
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { createBlog, getBlogs, updateBlog, deleteBlog };
