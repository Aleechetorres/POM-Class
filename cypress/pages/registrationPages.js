import BasePage from "../pages/basePage";

const user = Cypress.env('User');

export class RegistrationPage extends BasePage {
  constructor(){
    super();
    this.registerForm = '.card-header';
    this.emailInput = '#email';
    this.passwordInput = '#password';
    this.passwordConfirm = '#password-confirm';
    this.registerBtn = ' Register ';
  }

  verifyFormIsVisible(){
    cy.get(this.registerForm).should('be.visible');
  }

  fillForm(){
    cy.get(this.emailInput).type(user.userName);
    cy.get(this.passwordInput).type(user.password);
    cy.get(this.passwordConfirm).type(user.password);
    this.clickBtnByName(this.registerBtn);
  }
}
