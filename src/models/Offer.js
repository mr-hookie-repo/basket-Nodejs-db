class Offer {
    /**
     * Creates an Offer object.
     * @param {string} productCode The code of the product the offer applies to
     * @param {string} type The type of the offer. Currently only 'buy_one_get_one_half_price' is supported.
     * @param {number} value The value of the offer. For example, 0.5 for a 50% discount.
     * @throws {Error} If the productCode is not a string, type is not a string, or value is not a number.
     */
    constructor(productCode, type, value) {
      if (typeof productCode !== 'string' || typeof type !== 'string' || typeof value !== 'number') {
        throw new Error('Invalid offer data');
      }
      Object.assign(this, { productCode, type, value });
    }
  }
  
  module.exports = Offer;
