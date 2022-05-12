const express = require("express");
const home = require("./routes/home.js");
const deletePost = require("./routes/deletePost.js")

const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded({ extended: false });

server.get("/", home.get);


server.post("/delete-post", bodyParser, deletePost.post);

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} `)
);
