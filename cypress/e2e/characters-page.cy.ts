import { Character } from '../../src/entities/Character/model/types/Character';

describe('CharactersPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Посещение страницы со списком', () => {
    cy.url().should('eq', 'http://localhost:5173/Rick_and_Morty_project/');
  });

  it('Проверка по встроенным селекторам', () => {
    // Мок запроса за списком персонажей
    cy.intercept('GET', '/api/character?page=1', {
      fixture: 'characters-list.json'
    });

    // Проверить, что отображаются 5 персонажей
    cy.get('.character-card').should('have.length', 5);

    // Проверка по встроенным селекторам, что имена персонажей совпадают с теми, которые указаны в фикстуре
    cy.fixture('characters-list.json').then((data) => {
      const results = data.results;
      results.forEach((result: Character, i: number) => {
        cy.get('.character-card__description-name a')
          .eq(i)
          .invoke('text')
          .then((text) => {
            expect(text.trim()).to.eq(result.name);
          });
      });
    });
  });

  it('Проверка, что фильтрация по имени персонажа отработала', () => {
    const name = 'Morty';
    cy.url().should('eq', 'http://localhost:5173/Rick_and_Morty_project/');
    cy.get('#root [name="search"]').click();
    cy.get('#root [name="search"]').type(name);
    cy.intercept('GET', `/api/character?name=${name}&page=1`, {
      fixture: 'filtered-characters.json'
    });

    cy.fixture('filtered-characters.json').then((data) => {
      const results = data.results;
      results.forEach((result: Character, i: number) => {
        cy.get('.character-card__description-name a')
          .eq(i)
          .invoke('text')
          .then((text) => {
            expect(
              result.name.toUpperCase().includes(text.trim().toUpperCase())
            );
          });
      });
    });
  });
});
