const blogPosts = require("../blogPosts.js");

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

module.exports = { get }
