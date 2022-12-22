import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход на несуществующую страницу', () => {
      cy.visit('/unexistsPage');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('testuser', '123');
    });
    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
