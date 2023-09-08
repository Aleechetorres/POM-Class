import BasePage from '../pages/basePage';

export class HomePage extends BasePage{
  constructor() {
    super()
    this.welcomeWindow = 'Welcome';
    this.registratioBtn = 'Registration';
    this.emailBtn = 'Email';
  }

  verifyWelcomeWIndow(){
    cy.contains(this.welcomeWindow).should('be.visible');
  }

  goToRegistrationEmailPage(){
    this.clickBtnByName(this.registratioBtn);
    this.clickBtnByName(this.emailBtn);
  }
}
