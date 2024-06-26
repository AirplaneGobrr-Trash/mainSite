//Imports/Setup
const axios = require('axios').default;
const express = require('express');
const app = express();

//Vars 
const port = 8080

//Express setup
app.set('view engine', 'ejs');
app.use(express.static('public'));

// https://arc.io/arc-sw.js
app.get("/arc-sw.js", (req, res) => {
    axios.get("https://arc.io/arc-sw.js").then((response) => {
        res.contentType(response.headers['content-type'])
        res.send(response.data)
    }).catch((e) => {
        console.log(e)
        res.send("Error")
    })
})

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

app.get("/ip", (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    res.type('text/plain').send(ip)
})

app.get("/server", (req, res) => {
    res.redirect("minecraft://?addExternalServer=Robot%20Server|airplanegobrr.us.to:25565")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
