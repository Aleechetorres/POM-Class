class BasePage {
  clickBtnByName(name){
    cy.contains(name).click();
  }
}

export default BasePage;

