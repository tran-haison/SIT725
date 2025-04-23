// test/database.test.js
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const mongoose = require('mongoose');
const connectDB = require('../config/database');

describe('Database Connection', function () {
    before(function () {
        // Save original mongoose.connect method
        this.originalConnect = mongoose.connect;
    });

    afterEach(function () {
        // Restore mongoose.connect method
        mongoose.connect = this.originalConnect;
        if (console.log.restore) console.log.restore();
        if (console.error.restore) console.error.restore();
    });

    it('should connect to database successfully', async function () {
        // Stub console.log to verify it was called
        sinon.stub(console, 'log');

        // Stub mongoose.connect to resolve
        mongoose.connect = sinon.stub().resolves();

        await connectDB();

        expect(mongoose.connect.calledOnce).to.be.true;
        expect(console.log.calledWith('Connected to MongoDB!')).to.be.true;
    });

    it('should handle connection errors', async function () {
        // Stub console.error to verify it was called
        sinon.stub(console, 'error');

        // Stub process.exit to prevent actual exit
        const processStub = sinon.stub(process, 'exit');

        // Stub mongoose.connect to reject with an error
        const error = new Error('Connection error');
        mongoose.connect = sinon.stub().rejects(error);

        try {
            await connectDB();
        } catch (err) {
            // Do nothing, expect an error
        }

        expect(mongoose.connect.calledOnce).to.be.true;
        expect(console.error.calledWith('MongoDB connection error:', error)).to.be.true;
        expect(processStub.calledWith(1)).to.be.true;

        processStub.restore();
    });
});