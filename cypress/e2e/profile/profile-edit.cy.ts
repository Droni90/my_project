let profileId: string;
describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('И редактирует его', () => {
    const firstname = 'new';
    const lastname = 'lastname';
    cy.updateProfile(firstname, lastname);
    cy.getByTestId('ProfileCard.firstname').should('have.value', firstname);
    cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
  });
});
