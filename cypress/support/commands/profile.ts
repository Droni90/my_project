export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'dsds' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 27,
      currency: 'RUB',
      country: 'Kazakhstan',
      city: 'Sochi',
      username: 'testuser',
      avatar:
        'https://funart.pro/uploads/posts/2021-07/1626205442_26-funart-pro-p-kot-s-ukhmilkoi-zhivotnie-krasivo-foto-29.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
