const posts = require("../blogPosts.js");

// Deleting the post from the object of blogPosts
function post(request, response) {
    const postToDelete = request.body.name;
    delete posts[postToDelete];
    response.redirect("/");
}

module.exports = { post };