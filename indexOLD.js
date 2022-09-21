//Imports/Setup
const express = require('express');
const app = express();
const serveIndex = require('serve-index')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');
const db = require('./database.js');

const memesDir = "D:\\CharlieStuff\\MeMes"

//Custom Imports
const console = require('./console.js');

//Vars 
const port = 3500

//Express setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/logs', express.static('logs'), serveIndex('logs', {'icons': true}))
app.use('/files', express.static('files'), serveIndex('files', {'icons': true}))
app.use('/memesFiles', express.static(memesDir), serveIndex(memesDir, {'icons': true}))


//Express domain setup
app.get('/', (req, res) => {
  res.render("index")
});

app.get('/about', (req, res) => {
  res.render("about")
})

app.get('/projects', (req, res) => {
  res.render("projects")
})

app.get('/contact', (req, res) => {
  res.render("contact")
})

app.get("/memes", (req, res) => {
  res.render("memes")
})

app.get("/the-rock.gif",(req, res)=>{
    res.render("theRock")
})

app.get("/gifs", (req, res) => {
  res.render("gifs")
})

app.get('/login', (req, res) => {
  res.render("login")
})
app.get('/register', (req, res) => {
  res.render("register")
})

app.get('/serverSucks', (req, res) => {
  res.render("serverSucks")
})


//Socket IO
/*
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
</script>
*/
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("getGIFs", ()=>{
    try {
      const files = fs.readdirSync(memesDir);
      console.log(files)
      socket.emit("GIFs", files)
    } catch (error) {
      console.log(error)
    }
  })

  socket.on("addGIF", async (data)=>{
    console.log(data)
    if (!db.has("requestedGIFs")) await db.set("requestedGIFs", [])
    await db.push("requestedGIFs", data)
    await db.save()
    console.log(db.get("requestedGIFs"))
  })
});

//Server starter
server.listen(port, () => {
  console.log(`listening on *:${port}`);
  console.log(`http://airplanegobrr.us.to:${port}`);
  console.log("Started")
});