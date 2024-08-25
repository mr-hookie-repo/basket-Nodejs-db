class Database {
    constructor() {
      this.products = new Map();
      this.offers = new Map();
    }
  
    addProduct(product) {
      this.products.set(product.code, product);
    }

    // This has O(1) complexity.
    // To loop through the Map, it would be O(n).
    hasProduct(code) {
      return this.products.has(code);
    }
  
    /**
     * Retrieves a product by its code.
     * 
     * @param {string} code The product code.
     * @returns {Product} The product if found, undefined otherwise.
     */
    getProduct(code) {
      return this.products.get(code);
    }
  
    /**
     * Adds an offer to the database.
     * 
     * @param {Offer} offer The offer to add.
     */
    addOffer(offer) {
      this.offers.set(offer.productCode, offer);
    }
  
    /**
     * Retrieves an offer by its product code.
     * 
     * @param {string} productCode The product code.
     * @returns {Offer} The offer if found, undefined otherwise.
     */
    getOffer(productCode) {
      return this.offers.get(productCode);
    }
  }
  
  module.exports = Database;