const Poem = require('../models/poemModel');


const createPoem = async (req, res) => {
    try {
        const { title, content,dedicate, author } = req.body;
        const poem = await Poem.create({ title,content,dedicate, author });
        res.status(201).json({
            success: true,
            message: 'Poem created successfully',
            data: poem
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


const getPoems = async (req, res) => {
    try {
        const poems = await Poem.find();
        res.status(200).json({
            success: true,
            data: poems
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


const updatePoem = async (req, res) => {
    try {
        const poem = await Poem.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: 'poem updated successfully',
            data: poem
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const deletePoem = async (req, res) => {
    try {
        await Poem.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Poem deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { createPoem, getPoems, updatePoem, deletePoem };
