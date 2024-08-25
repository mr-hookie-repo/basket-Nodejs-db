const Offer = require('../../src/models/Offer');

describe('Offer', () => {
  test('creates a valid offer', () => {
    const offer = new Offer('R01', 'buy_one_get_one_half_price', 0.5);
    expect(offer.productCode).toBe('R01');
    expect(offer.type).toBe('buy_one_get_one_half_price');
    expect(offer.value).toBe(0.5);
  });

  test('throws error for invalid data', () => {
    expect(() => new Offer(123, 'buy_one_get_one_half_price', 0.5)).toThrow('Invalid offer data');
    expect(() => new Offer('R01', 123, 0.5)).toThrow('Invalid offer data');
    expect(() => new Offer('R01', 'buy_one_get_one_half_price', '0.5')).toThrow('Invalid offer data');
  });
});