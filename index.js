//Imports/Setup
const express = require('express');
const app = express();
const serveIndex = require('serve-index')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');

//Custom Imports
const console = require('./console.js');
const dbClass = require("@airplanegobrr/database")
const db = new dbClass()
const discord = require('./discord.js');

//Vars 
const port = 8080

//Stuff
app.io = io;

//Express setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/files', express.static('files'), serveIndex('files', {'icons': true}))

app.get('/', (req, res) => {
    res.render("index")
});

app.get('/projects', (req, res) => {
    res.render("projects")
})

app.get('/contact', (req, res) => {
    res.render("contact")
})

app.get('/about', (req, res) => {
    res.render("about")
})

discord.start(app, io)

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.onAny(console.log)
});


server.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
