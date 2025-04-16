const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/api/projects', projectController.getAllProjects);

module.exports = router; 