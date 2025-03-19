const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: false }));

// Basic route
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/sum', (req, res) => {
    // Parse the numbers from the query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    // Calculate the sum
    const sum = num1 + num2;

    res.json({
        num1: num1,
        num2: num2,
        result: sum
    });
});

// POST endpoint for calculator operations
app.post('/sum', (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    // Calculate the sum
    const sum = n1 + n2;

    res.json({
        num1: n1,
        num2: n2,
        result: sum
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 