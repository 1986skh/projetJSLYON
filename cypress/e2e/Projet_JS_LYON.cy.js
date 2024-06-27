describe('Test FRONTEND', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('localUrl'));
  });

  it('Le bouton "Commencer" mène vers la page "/result-page"', () => {
    cy.contains('Commencer')
      .click();
    cy.url().should('include', '/result-page');
  });

  it('Le bouton "Me connecter" mène vers la page "/login-page"', () => {
    cy.contains('Me connecter')
      .click();
    cy.url().should('include', '/login-page');
  });

  it('Le lien "Inscrivez-vous" mène vers la page "/sign-up-page"', () => {
    cy.contains('Inscrivez-vous')
      .click();
    cy.url().should('include', '/sign-up-page');
  });
  it('soumettre mon inscription méne vers la page')
});
describe('Test BACKEND', () => {
  const companyUrl = 'http://localhost:3310/api/companies';
  it('Teste la méthode GET pour api companies', () => {
    cy.request(companyUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      const companyExists = response.body.some(element => element.name === 'Sanofi');
      expect(companyExists).to.be.true;
    });
  });

    it('Envoie une requête POST pour créer un utilisateur', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3310/api/users', 
        body: {
          email: 'teste@gmail.com',
          password: 'Wildschol@2024'
        }
      }).then((response) => {
        expect(response.status).to.equal(201);
      });
    });
});
/*
  it('Teste la méthode GET avec un paramètre de recherche', () => {
    cy.request('GET', apiUrl, { name: 'Sanofi' }).then((response) => {
      expect(response.status).to.eq(200);
      // Assurez-vous que le nom Sanofi est dans la réponse
      expect(response.body).to.satisfy((companies) => {
        return companies.some((company) => company.name === 'Sanofi');
      });
    });
  });

  it('Teste la méthode POST', () => {
    const newCompany = { name: 'Nouvelle Entreprise', location: 'France' };
    cy.request('POST', apiUrl, newCompany).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Nouvelle Entreprise');
    });
  });

  it('Teste la méthode PUT', () => {
    const updatedCompany = { name: 'Entreprise Mise à Jour', location: 'France' };
    cy.request('PUT', `${apiUrl}/1`, updatedCompany).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Entreprise Mise à Jour');
    });
  });

  it('Teste la méthode DELETE', () => {
    cy.request('DELETE', `${apiUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });*/

