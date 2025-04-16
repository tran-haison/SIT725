// test/project.model.test.js
const chai = require('chai');
const expect = chai.expect;
const Project = require('../models/Project');

describe('Project Model', function () {
    it('should be a valid model', function () {
        const project = new Project({
            title: 'Test Project',
            image: 'test.jpg',
            link: 'Test Link',
            description: 'Test Description'
        });

        expect(project).to.have.property('title').equal('Test Project');
        expect(project).to.have.property('image').equal('test.jpg');
        expect(project).to.have.property('link').equal('Test Link');
        expect(project).to.have.property('description').equal('Test Description');
    });
});