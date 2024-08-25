const Database = require('../../src/models/Database');
const Product = require('../../src/models/Product');
const Offer = require('../../src/models/Offer');

describe('Database', () => {
  let database;

  beforeEach(() => {
    database = new Database();
  });

  test('adds and retrieves products', () => {
    const product = new Product('R01', 'Red Widget', 32.95);
    database.addProduct(product);
    expect(database.getProduct('R01')).toBe(product);
  });

  test('adds and retrieves offers', () => {
    const offer = new Offer('R01', 'buy_one_get_one_half_price', 0.5);
    database.addOffer(offer);
    expect(database.getOffer('R01')).toBe(offer);
  });
});