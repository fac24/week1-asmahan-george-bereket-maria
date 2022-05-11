const blogPosts = require("../blogPosts.js");

const express = require("express");
const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

function get(request, response) {
  let posts = "";
  for (const post of Object.values(blogPosts)) {
    posts += `
        <div class="blog-post"><div><h3>${post.user}</h3> <p>${post.message}</p></div><button class="delete">delete</button></div>
        `;
  }
  const html = `
    <!doctype html>
    <html>
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
        <div>
            <header>
                <h2>Pos<span class="green">ts</span></h2>
            </header>
            ${posts}
        </div>
      </body>
    </html>
    `;
  response.send(html);
}

module.exports = { get };
