// const express = require('express')
// const app = express()
// const server = require('http').Server(app)
// const PORT = process.env.PORT || 3231

// app.use(express.static(__dirname + '/'))

// server.listen(PORT, ()=>{
// 	console.log("Connected to port:" + PORT);
// })

const express = require ('express');
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3300;

app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});