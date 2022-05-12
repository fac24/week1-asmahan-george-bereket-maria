const express = require("express");
const home = require("./routes/home.js");

const server = express();

const staticHandler = express.static("public");
server.use(staticHandler);

server.get('/', home.get);

server.get("/", (request, response) => {
  response.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crocspace</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
  <h1>hel<span class="green">lo</span></h1>
  </body>
</html>

  `);
});

const PORT = 3000;
server.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT} `)
);
