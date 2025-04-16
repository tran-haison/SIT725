// test/project.controller.test.js
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const projectController = require('../controllers/projectController');
const projectService = require('../services/projectService');

describe('Project Controller', function () {
    let req, res;

    beforeEach(function () {
        // Create a fresh req and res for each test
        req = {};
        res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ json: sinon.spy() })
        };

        // Reset stubs
        if (projectService.getAllItems && projectService.getAllItems.restore) {
            projectService.getAllItems.restore();
        }
    });

    it('should return projects with status code 200 on success', async function () {
        const mockProjects = [{ title: 'Test Project' }];
        sinon.stub(projectService, 'getAllItems').resolves(mockProjects);

        await projectController.getAllProjects(req, res);

        expect(res.json.calledOnce).to.be.true;
        expect(res.json.firstCall.args[0]).to.deep.equal({
            statusCode: 200,
            data: mockProjects,
            message: 'Success'
        });
    });

    it('should return status code 500 on error', async function () {
        const error = new Error('Service error');
        sinon.stub(projectService, 'getAllItems').rejects(error);

        await projectController.getAllProjects(req, res);

        expect(res.status.calledOnce).to.be.true;
        expect(res.status.calledWith(500)).to.be.true;
        expect(res.status().json.calledOnce).to.be.true;
        expect(res.status().json.firstCall.args[0]).to.deep.equal({
            statusCode: 500,
            message: error.message
        });
    });
});