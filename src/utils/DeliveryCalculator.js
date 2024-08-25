class DeliveryCalculator {
    static DELIVERY_CHARGES = [
      { threshold: 90, charge: 0 },
      { threshold: 50, charge: 2.95 },
      { threshold: 0, charge: 4.95 }
    ];

    // Calculate the delivery charge based on the total price of the items in the basket.
   
    static calculate(total) {
      /**
       * The rules for calculating the delivery charge are as follows:
       *  - Delivery is free for orders over 90.
       *  - Delivery is 2.95 for orders over 50.
       *  - Delivery is 4.95 for orders under 50.
       */
      for (const { threshold, charge } of this.DELIVERY_CHARGES) {
        if (total >= threshold) {
          return charge;
        }
      }

      throw new Error('Unreachable code');
    }
  }
  
  module.exports = DeliveryCalculator;
