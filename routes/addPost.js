const posts = require("../blogPosts.js");

// Adding a post to our posts object
function post(request, response) {
    let newUser = request.body;
    let name = newUser.user.replace(/</g, "&lt;");
    let message = newUser.message.replace(/</g, "&lt;");
    // Setting a unique ID key for each post as the number of milleseconds since 01/01/1970 00:00
    // This works as only one user realistically posting once per millesecond on a project this small.
    let uniqueID = new Date().getTime();
    posts[uniqueID] = {user: name, message: message};  
    response.redirect("/");
}

module.exports = { post }