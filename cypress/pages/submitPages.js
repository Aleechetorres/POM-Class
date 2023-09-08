export class SubmitPage {
  constructor() {
    this.formResults = 'Form Submit Results';
  }

  verifyResultIsVisible(){
    cy.contains(this.formResults).should('be.visible');
  }
}
