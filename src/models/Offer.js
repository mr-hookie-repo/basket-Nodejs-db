class Offer {
    constructor(productCode, type, value) {
      if (typeof productCode !== 'string' || typeof type !== 'string' || typeof value !== 'number') {
        throw new Error('Invalid offer data');
      }
      this.productCode = productCode;
      this.type = type;
      this.value = value;
    }
  }
  
  module.exports = Offer;