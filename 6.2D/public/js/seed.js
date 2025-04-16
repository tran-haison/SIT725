const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});
const Project = mongoose.model('Project', ProjectSchema);

const sampleProject = new Project({
    title: "Kitten 4",
    image: "images/kitten-4.png",
    link: "About Kitten 4",
    description: "Demo description about kitten 4"
});

sampleProject.save().then(() => {
    console.log("Sample project saved!");
    mongoose.connection.close();
});
