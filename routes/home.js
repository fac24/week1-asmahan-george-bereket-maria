const blogPosts = require("../blogPosts.js");

function get(request, response) {
  const crocsForm = `<form action="/crocspace-comments" method="POST">
<label for="username">User:</label>
<input type="text" id="username" placeholder="username" name="name"><br>
<label for="usermessage">Message:</label>
<input type="text" id="usermessage" placeholder="enter message" message="message"><br>       
<input type="Submit" required value="Submit"></button>
</form>`;
  
  
  
  let posts = "";



  for (const postKey in blogPosts) {
    post = blogPosts[postKey]
    posts += `
    <div class="blog-post">
      <div>
        <h3>${post.user}</h3>
        <p>${post.message}</p>
      </div>
      <form action="/delete-post" method="POST">
        <button class="delete" name="name" value="${postKey}" aria-label="Delete ${postKey}">
          Delete
        </button>
      </form>
    </div>
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
      <h1>Leave a message!</h1>
      ${crocsForm}
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
