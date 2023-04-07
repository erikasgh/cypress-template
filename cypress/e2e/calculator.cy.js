describe('Calculator test', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator');

    cy.get('#selectBuild').select('Prototype');
    cy.get('#number1Field').should('be.visible');
    cy.get('#number2Field').should('be.visible');
  });

  it('Test Add', () => {
    cy.get('#number1Field').type(25);
    cy.get('#number2Field').type(2);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 27);
  });

  it('Test Add with decimal number', () => {
    cy.get('#number1Field').type(25.3);
    cy.get('#number2Field').type(2);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 27.3);
    cy.get('#integerSelect').check();
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 27);
  });

  it('Test Subtract', () => {
    cy.get('#selectOperationDropdown').select('Subtract');
    cy.get('#number1Field').type(45);
    cy.get('#number2Field').type(2);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 43);
    cy.get('#number2Field').clear().type(48);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', -3);
  });

  it('Test Multiply', () => {
    cy.get('#selectOperationDropdown').select('Multiply');
    cy.get('#number1Field').type(5);
    cy.get('#number2Field').type(3);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 15);
  });

  it('Test Divide', () => {
    cy.get('#selectOperationDropdown').select('Divide');
    cy.get('#number1Field').type(5);
    cy.get('#number2Field').type(3);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 1.6666666666666667);
  });

  it('Test Divide by zero', () => {
    cy.get('#selectOperationDropdown').select('Divide');
    cy.get('#number1Field').type(5);
    cy.get('#number2Field').type(0);
    cy.get('#calculateButton').click();
    cy.get('#errorMsgField').should('have.text', 'Divide by zero error!');
  });

  it('Test Concatenate', () => {
    cy.get('#selectOperationDropdown').select('Concatenate');
    cy.get('#number1Field').type(5);
    cy.get('#number2Field').type(3);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 53);
  });

  it('Test Concatenate with string in text', () => {
    cy.get('#selectOperationDropdown').select('Concatenate');
    cy.get('#number1Field').type('ezf');
    cy.get('#number2Field').type(3);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 'ezf3');
  });

  it('Test error message for not number', () => {
    cy.get('#number1Field').type('testas');
    cy.get('#calculateButton').click();
    cy.get('#errorMsgField').should('have.text', 'Number 1 is not a number');
    cy.get('#number1Field').clear().type('2,2');
    cy.get('#calculateButton').click();
    cy.get('#errorMsgField').should('have.text', 'Number 1 is not a number');
  });

  it('Test add method with e expression', () => {
    cy.get('#number1Field').type('1e3');
    cy.get('#number2Field').type('2e3');
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', '3000');
  });

});
