const Project = require('../models/Project');

const cardItems = [
    {
        title: "Kitten 2",
        image: "images/kitten-2.jpeg",
        link: "About Kitten 2",
        description: "Demo description about kitten 2"
    },
    {
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        description: "Demo description about kitten 3"
    }
];

const projectService = {
    // Get all items from the database
    getAllItems: async () => {
        try {
            const items = await Project.find({});
            // If no projects found or empty array, return items
            if (!items || items.length === 0) {
                return cardItems;
            }
            return items;
        } catch (error) {
            console.error('Error fetching projects:', error.message);
            // Return hardcoded projects in case of error
            return cardItems;
        }
    },
};

module.exports = projectService; 
