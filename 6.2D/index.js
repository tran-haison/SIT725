const express = require("express");
const app = express();
const port = process.env.port || 3000;
const connectDB = require('./config/database');
const projectRoutes = require('./routes/projectRoutes');

// Connect to database
connectDB();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', projectRoutes);

app.listen(port, () => {
    console.log("App listening to: " + port);
    console.log("http://localhost:" + port);
});
