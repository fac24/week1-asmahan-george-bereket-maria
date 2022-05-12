const blogPosts = require("../blogPosts.js");

const express = require("express");
const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

//array of messages
let messagesArray = [
  {username: "", message: ""}
]

let messagesList = "";

let message = "";

//user input
const crocsForm = `<form action="/crocspace-comments" method="POST">
<label for="username">User:</label>
<input type="text" id="username" placeholder="username" name="name"><br>
<label for="usermessage">Message:</label>
<input type="text" id="usermessage" placeholder="enter message" message="message"><br>       
<input type="Submit" required value="Submit"></button>
</form>`;

server.get("/", (request, response) => {
messageList = "";
  
  messagesArray.forEach((post) => {
    message  = `<li>
    <p>User: ${post["username"]} </p>
    <p>Message ${post["message"]}</p>

    <form action="/delete-posts" method="POST">
    <button name="${post["username"]}" value="${post["message"]} <form>
    </li>`;

messageList += message;
});

const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Crocspace</title>
      </head>
      <body>
      <h1>Leave a message!!</h1>
      ${crocsForm}
        <div>
            <header>
                <h2>Posts</h2>
            </header>
            ${posts}
        </div>
      </body>
    </html>`;

    response.send(html)
});


function get(request, response) {
    let posts = '';
    for (const post of Object.values(blogPosts)) {
        posts += `
        <div class="blog-post"><h3>${post.user}</h3> <p>${post.message}</p></div>
        `
    };
    const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Crocspace</title>
      </head>
      <body>
      <h1>Leave a message!</h1>
      ${crocsForm}
        <div>
            <header>
                <h2>Posts</h2>
            </header>
            ${posts}
        </div>
      </body>
    </html>
    `
    response.send(html)
};

const bodyParser = express.urlencoded(); //allows us to read the HHTP post data

module.exports = { get }
