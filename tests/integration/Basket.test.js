const Database = require('../../src/models/Database');
const ProductManager = require('../../src/services/ProductManager');
const OfferManager = require('../../src/services/OfferManager');
const Basket = require('../../src/services/Basket');

describe('Basket Integration', () => {
  let database, productManager, offerManager, basket;

  beforeEach(() => {
    database = new Database();
    productManager = new ProductManager(database);
    offerManager = new OfferManager(database);
    basket = new Basket(productManager, offerManager);

    productManager.addProduct('R01', 'Red Widget', 32.95);
    productManager.addProduct('G01', 'Green Widget', 24.95);
    productManager.addProduct('B01', 'Blue Widget', 7.95);

    offerManager.addOffer('R01', 'buy_one_get_one_half_price', 0.5);
  });

  test('calculates total correctly for scenario 1', () => {
    basket.add('B01');
    basket.add('G01');
    expect(basket.total()).toBeCloseTo(37.85, 2);
  });

  test('calculates total correctly for scenario 2', () => {
    basket.add('R01');
    basket.add('R01');
    expect(basket.total()).toBeCloseTo(54.37, 2);
  });

  test('calculates total correctly for scenario 3', () => {
    basket.add('R01');
    basket.add('G01');
    expect(basket.total()).toBeCloseTo(60.85, 2);
  });

  test('calculates total correctly for scenario 4', () => {
    basket.add('B01');
    basket.add('B01');
    basket.add('R01');
    basket.add('R01');
    basket.add('R01');
    expect(basket.total()).toBeCloseTo(98.27, 2);
  });
});