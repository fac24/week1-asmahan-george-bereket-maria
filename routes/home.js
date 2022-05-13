const blogPosts = require("../blogPosts.js");
const colours = require("../public/colours.js");

// Function for to get the page with any current posts and a way of submitting or deleting posts
function get(request, response) {

  // Creating the form for the main homepage
  const crocsForm = /* html */ `
    <form action="/crocspace-comments" method="POST">
      <label for="username">User:</label>
      <input type="text" id="username" placeholder="username" name="user" class="usernamebox"><br>
      <label for="usermessage">Message:</label>
      <input type="text" id="usermessage" placeholder="enter message" name="message" class="messagebox"><br>       
      <button type="Submit" value="Submit" class="submit">Submit</button>
    </form>
  `;
  
  // Setup for the posts part of our html
  let posts = "";
  // Setting our index for the colours array
  let coloursIndex = -1;

  // Go through the object of users and their messages to add each post as html for the page
  for (const postKey in blogPosts) {
    post = blogPosts[postKey];
    
    // Increment index by 1 then find it's value modulus length of colours for it's relative value in the array
    coloursIndex = (coloursIndex + 1) % colours.length;
    
    posts += /* html */`
        <div class="blog-post ${colours[coloursIndex]}">
          <div>
            <h3>${post.user}</h3>
            <p>${post.message}</p>
          </div>
          <div class="button-div">
          <form action="/delete-post" method="POST">
            <button class="delete" name="name" value="${postKey}" aria-label="Delete ${postKey}">
              Delete
            </button>
          </form>
          </div>
        </div>
        `;
  }

  const html = /* html */ `
    <!doctype html>
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
        <div>
          <header><h1>Cro<span class="greentext">cSp</span>ace</h1></header>
          <h2>Lea<span class="greentext">ve</span> a mess<span class="greentext">age!</span></h2>
          ${crocsForm}
          <h2>Pos<span class="greentext">ts</span></h2>
          ${posts}
        </div>
      </body>
    </html>
    `;

  response.send(html);


}

module.exports = { get };
