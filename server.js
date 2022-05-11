const express = require("express");

const server = express();

//Edit below
//dependencies

//Edit above

server.get("/", (request, response) => {
    response.send(
   ` <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Form</title>
        <form action="/" method="POST">
        <label for="username">User:</label>
        <input type="text" id="username" placeholder="username">
        <label for="usermessage">Message:</label>
        <input type="text" id="usermessage" placeholder="enter message">        
        <button>Submit</button>
        </form>
      </head>
      <body>
  <h1>Hello</h1>
      </body>
    </html>`
    );
  });
  
  const PORT = 3335;
  server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));