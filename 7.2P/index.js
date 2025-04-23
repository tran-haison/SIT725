const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.port || 3000;
const connectDB = require('./config/database');
const projectRoutes = require('./routes/projectRoutes');

// Connect to database
connectDB();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Emit a random number every second
    setInterval(() => {
        const randomNum = Math.floor(Math.random() * 100);
        socket.emit('number', randomNum);
    }, 1000);
});

// Routes
app.use('/', projectRoutes);

http.listen(port, () => {
    console.log("App listening to: " + port);
    console.log("http://localhost:" + port);
});
