const Database = require('../../src/models/Database');
const ProductManager = require('../../src/services/ProductManager');

describe('ProductManager', () => {
  let database, productManager;

  beforeEach(() => {
    database = new Database();
    productManager = new ProductManager(database);
  });

  test('adds and retrieves products', () => {
    productManager.addProduct('R01', 'Red Widget', 32.95);
    const product = productManager.getProduct('R01');
    expect(product.name).toBe('Red Widget');
    expect(product.price).toBe(32.95);
  });

  test('throws error for non-existent product', () => {
    expect(() => productManager.getProduct('NONEXISTENT')).toThrow('Product not found');
  });
});