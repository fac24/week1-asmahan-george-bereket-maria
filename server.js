const express = require("express");
const home = require("./routes/home.js");
const deletePost = require("./routes/deletePost")

const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

server.get('/', home.get);

const bodyParser = express.urlencoded({extended: false})

server.post("/delete-post", bodyParser, deletePost.post)


const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} `)
);
