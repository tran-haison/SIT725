const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

module.exports = mongoose.model('Project', ProjectSchema); 