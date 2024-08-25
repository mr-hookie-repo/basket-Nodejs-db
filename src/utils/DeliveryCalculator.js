class DeliveryCalculator {
    static calculate(total) {
      if (total >= 90) return 0;
      if (total >= 50) return 2.95;
      return 4.95;
    }
  }
  
  module.exports = DeliveryCalculator;