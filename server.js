const express = require("express");
//Importing our routes
const home = require("./routes/home.js");
const addPost = require("./routes/addPost.js")
const deletePost = require("./routes/deletePost.js");

const server = express();

// Using our static files e.g. css, colours, images, etc.
const staticHandler = express.static("public");
server.use(staticHandler);

// Getting the homepage through our server route.
server.get('/', home.get);

// Allowing our posts to read the body of what's submitted
const bodyParser = express.urlencoded({extended: false})

// Routing our post requests of adding and deleting user posts
server.post("/crocspace-comments", bodyParser, addPost.post);
server.post("/delete-post", bodyParser, deletePost.post)

// Setting the port for heroku and if not on heroku it sets it to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} `))
;
