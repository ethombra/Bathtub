//const productMenuItem = require('../fixtures/products.json');
const productMenu = Cypress.env('products');
const categoriesMenu = Cypress.env('categories');
const innovationsMenu = Cypress.env('innovations');
const productSeriesMenu = Cypress.env('productSeries');
const therapiesMenu = Cypress.env('therapies');

describe('Bathtubs product list automation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByText('Accept Cookies').click();
    cy.reload();
  });

  it('E2E flow for adding a Product to the wish list', () => {
    cy.get('.card-title').should('have.attr', 'href', '/product/bosca-6030-ifs-afr-acrylic-alcove-bathtub/106395/106395-l-000-001');
    cy.get('.name:nth-child(1)').contains('Bosca 6030 IFS AFR Acrylic Alcove Bathtub');
    cy.contains('Bosca 6030 IFS AFR Acrylic Alcove Bathtub').dblclick();

    //asserting the correct item is being displayed
    cy.findAllByText('Bosca 6030 IFS AFR Acrylic Alcove Left-Hand Drain Bathtub in White').should('be.visible');
    cy.get('.name:nth-child(2)').contains('Bosca 6030 IFS AFR Acrylic Alcove Left-Hand Drain Bathtub in White');


    //asserting the correct model number is displayed
    cy.findAllByText('106395-L-000-001').should('be.visible');
    //asserting the correct dimensions are the one being selected
    cy.findAllByText('59 3/4" x 30" x 20 3/8"').should('be.visible');

    //verifying the colour selected is white
    cy.get('.group:nth-child(1) > .label').contains('White (001)');

    //verify the price being displayed correctly
    cy.findAllByText('MSRP* CAD$ 1,430.00').should('be.visible');

    //adding the item to the wishlist
    cy.get('[data-product-id="106395"]').click();
    cy.visit(Cypress.env('wishListURL'));

    //verify there is only 1 item within the Wishlist and is the correct item
    cy.findAllByText('Bosca 6030 IFS AFR Acrylic Alcove Bathtub').should('be.visible');
    cy.get('.name:nth-child(2)').contains('Bosca 6030 IFS AFR Acrylic Alcove Bathtub');
    cy.get('.update-from-cart').should("have.value", '1');
    cy.get('.col-print-6:nth-child(2)').contains('White (001)');
    cy.findAllByText('59 3/4" x 30" x 20 3/8"').should('be.visible');
    cy.get('.col-auto:nth-child(2)').contains('CAD$ 1,430.00')
  })


  it('Product menu Validation', () => {

    //verify the first option within the menu is Products
    cy.get('.first-level-menu-item').eq(0).contains('Products');
    cy.get('.first-level-menu-item').eq(0).click();

    //verify the sub options within the Products menu
    cy.get('.is-opened > .inner > ul > .menu-item:nth-child(3)').contains(productMenu.categories);
    cy.get('.is-opened > .inner > ul > .menu-item:nth-child(4)').contains(productMenu.innovations);
    cy.get('.submenu > .inner > ul > .menu-item:nth-child(5)').contains(productMenu.productSeries);
    cy.get('.inner > ul > .menu-item:nth-child(6)').contains(productMenu.therapies);

    //verify the options within the Categories section
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(3)').contains(categoriesMenu.bathtubs);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(4)').contains(categoriesMenu.bathSolutions);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(5)').contains(categoriesMenu.showers);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(6)').contains(categoriesMenu.showerDoors);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(7)').contains(categoriesMenu.showerbase);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(8)').contains(categoriesMenu.tubShowers);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(9)').contains(categoriesMenu.wallSurrounds);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(10)').contains(categoriesMenu.accessibleCompliance);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(11)').contains(categoriesMenu.medicineCabinets);
    cy.get('.is-opened .menu-item:nth-child(3) .menu-item:nth-child(12)').contains(categoriesMenu.sinks);

    //verify the options within the Innovations section
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(3)').contains(innovationsMenu.utile);
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(4)').contains(innovationsMenu.moduleR);
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(5)').contains(innovationsMenu.agingInPlace);
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(6)').contains(innovationsMenu.drain);
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(7)').contains(innovationsMenu.acrylx);
    cy.get('.is-opened .menu-item:nth-child(4) .menu-item:nth-child(8)').contains(innovationsMenu.freeStanding);

    //verify the options within the Product Series section
    cy.get('.is-opened .menu-item:nth-child(5) .menu-item:nth-child(3)').contains(productSeriesMenu.maax);
    cy.get('.is-opened .menu-item:nth-child(5) .menu-item:nth-child(4)').contains(productSeriesMenu.collection);
    cy.get('.is-opened .menu-item:nth-child(5) .menu-item:nth-child(5)').contains(productSeriesMenu.professional);
    cy.get('.is-opened .menu-item:nth-child(5) .menu-item:nth-child(6)').contains(productSeriesMenu.retail);

    //verify the options within the Therapies section
    cy.get('.is-opened .menu-item:nth-child(6) .menu-item:nth-child(3)').contains(therapiesMenu.airMassage);
    cy.get('.is-opened .menu-item:nth-child(6) .menu-item:nth-child(4)').contains(therapiesMenu.waterMassage);
    cy.get('.is-opened .menu-item:nth-child(6) .menu-item:nth-child(5)').contains(therapiesMenu.combinedMassage);
    cy.get('.is-opened .menu-item:nth-child(6) .menu-item:nth-child(6)').contains(therapiesMenu.chromatherapy)
  })

  it('Validate the filter selection for Product Series', () => {
    cy.findAllByText('Bathtubs').should('exist');
    //assering when all of the Product Series are selected there are total of 253 items available
    cy.get('[id="productlookups.series.internal_valueProfessional"]').should('exist');
    cy.get('[id="productlookups.series.internal_valueProfessional"]').check({ force: true });
    cy.get('[id="productlookups.series.internal_valueCollection"]').should('exist');
    cy.get('[id="productlookups.series.internal_valueCollection"]').check({ force: true });
    cy.get('[id="productlookups.series.internal_valueRetail"]').should('exist');
    cy.get('[id="productlookups.series.internal_valueRetail"]').check({ force: true });
    cy.get('[id="productlookups.series.internal_valueMAAX"]').should('exist');
    cy.get('[id="productlookups.series.internal_valueMAAX"]').check({ force: true });
    cy.findByText('253 Product(s)').should('exist');
  })
})

