const DeliveryCalculator = require('../../src/utils/DeliveryCalculator');

describe('DeliveryCalculator', () => {
  test('calculates correct delivery charge', () => {
    expect(DeliveryCalculator.calculate(40)).toBe(4.95);
    expect(DeliveryCalculator.calculate(60)).toBe(2.95);
    expect(DeliveryCalculator.calculate(100)).toBe(0);
  });
});