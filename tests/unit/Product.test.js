const Product = require('../../src/models/Product');

describe('Product', () => {
  test('creates a valid product', () => {
    const product = new Product('R01', 'Red Widget', 32.95);
    expect(product.code).toBe('R01');
    expect(product.name).toBe('Red Widget');
    expect(product.price).toBe(32.95);
  });

  test('throws error for invalid data', () => {
    expect(() => new Product(123, 'Red Widget', 32.95)).toThrow('Invalid product data');
    expect(() => new Product('R01', 123, 32.95)).toThrow('Invalid product data');
    expect(() => new Product('R01', 'Red Widget', '32.95')).toThrow('Invalid product data');
  });
});