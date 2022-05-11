const express = require('express');
const home = require("./routes/home.js");

const server = express();

server.get('/', home.get)

const PORT = 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT} `))