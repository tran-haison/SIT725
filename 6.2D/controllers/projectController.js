const projectService = require('../services/projectService');

const projectController = {
    getAllProjects: async (req, res) => {
        try {
            const items = await projectService.getAllItems();
            res.json({ statusCode: 200, data: items, message: "Success" });
        } catch (error) {
            res.status(500).json({ statusCode: 500, message: error.message });
        }
    }
};

module.exports = projectController; 