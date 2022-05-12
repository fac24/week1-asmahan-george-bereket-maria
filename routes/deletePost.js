const posts = require("../blogPosts.js");

function post(request, response) {
    const postToDelete = request.body.name;
    delete posts[postToDelete];
    response.redirect("/");
}

module.exports = { post };