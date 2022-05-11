const express = require("express");
const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

//array of messages

let messagesList = "";
let message = "";
let messagesArray = [
  {username: "", message: ""}
]

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

  const crocsForm = 
`<form action="/crocspace-comments" method="POST">
<label for="username">User:</label>
<input type="text" id="username" placeholder="username" name="name"><br>
<label for="usermessage">Message:</label>
<input type="text" id="usermessage" placeholder="enter message" message="message"><br>       
<input type="Submit" required value="Submit"></button>
</form>`;


  const html = 
 ` <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>crocspace</title>
    </head>
    <body>
    <h1>A safe space for fans of crocs</h1>
    ${crocsForm}
    </body>
  </html>`
  ;
  response.send(html)
});
  
const bodyParser = express.urlencoded();


  const PORT = 3335;
  server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

  server.post("/crocspace-comments", bodyParser, (request, response) => {
    const name = Object.keys(request.body)[0];
    const message = Object.values(request.body)[0];

    response.redirect("/");
});