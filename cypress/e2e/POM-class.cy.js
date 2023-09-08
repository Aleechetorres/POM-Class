/* import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPages";
import SubmitPage from "../pages/submitPages"; */

import { HomePage,SubmitPage } from "../pages";
import { RegistrationPage } from "../pages/registrationPages";

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const submitPage = new SubmitPage();

describe('POM Class', () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.verifyWelcomeWIndow();
  });

  it("verificar que la página 'Registration > EMail' abre bien", () =>{
    homePage.goToRegistrationEmailPage();
    //Assertion
    registrationPage.verifyFormIsVisible();
  });

  it('El formulario se puede diligenciar correctamente', () => {
    homePage.goToRegistrationEmailPage();
    registrationPage.fillForm();
    //Assertion
    submitPage.verifyResultIsVisible();
  })
})