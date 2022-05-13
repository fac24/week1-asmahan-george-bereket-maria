const express = require("express");
const home = require("./routes/home.js");
const deletePost = require("./routes/deletePost");
const posts = require("./blogPosts.js");

const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

server.get('/', home.get);

const bodyParser = express.urlencoded({extended: false})

server.post("/crocspace-comments", bodyParser, (request, response) => {
  let newUser = request.body;
  let name = newUser.user.replace(/</g, "&lt;");
  let message = newUser.message.replace(/</g, "&lt;");
  let uid = new Date().getTime();
  posts[uid] = {user: name, message: message};  
  response.redirect("/");
});

server.post("/delete-post", bodyParser, deletePost.post)


const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} `))
;
