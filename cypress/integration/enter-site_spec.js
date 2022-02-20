describe("see if local host is running and all pages is working", ()=>{
  it("enter localhost 3000/", () =>{
    cy.visit('localhost:3000');
  })
  it("enter localhost 3000/about", () =>{
    cy.visit('localhost:3000/about');
  })
  it("enter localhost 3000/challenges", () =>{
    cy.visit('localhost:3000/challenges');
  })
})