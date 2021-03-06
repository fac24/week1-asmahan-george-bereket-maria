it("user can navigate the page", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
});

it("page contains a heading", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("h1").contains("CrocSpace");
});

it("user can input username", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='user']").type("testusername");
  //check testusername
  cy.get("input[name='user']").should("have.value", "testusername");
  //untype e.g fresh page
  cy.reload();
});

it("user can input message", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='message']").type("test user message");
  //check testmessage
  cy.get("input[name='message']").should("have.value", "test user message");
  //untype e.g fresh page
  cy.reload();
});

it("user can submit new post, and post can be deleted", () => {
  cy.visit("https://crocsblog.herokuapp.com/");
  cy.get("form").find("input[name='user']").type("testusername");
  cy.get("form").find("input[name='message']").type("test user message");
  cy.get(".submit").click();
  // modifies the page! need to remove added post
  cy.get(".delete").last().click();
});
