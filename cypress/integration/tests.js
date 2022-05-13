it("user can navigate the page", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
});

// it("page contains a heading", () => {
//   cy.visit("https://crocsblog.herokuapp.com/");
//   cy.get("h1").contains("CrocSpace");
// });

it("user can input username", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='user']").type("testusername");
});

it("user can input email", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='message']").type("test user message");
});

it("user can submit new post", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='user']").type("testusername");
  cy.get("form").find("input[name='message']").type("test user message");
  cy.get(".submit").click();
  // modifies the page! need to remove added post
  // cy.get(".delete").last().click();
});

it("user can delete a post", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  // find the post
  // find the delete button
});
