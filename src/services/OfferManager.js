const Offer = require('../models/Offer');

class OfferManager {
  // Creates an OfferManager.
  
  constructor(database) {
    this.database = database;

    // The cache of offers by product code.
   
    this.cache = new Map();
  }

  _getOfferFromCache(code) {
    return this.cache.get(code);
  }

  // Retrieves an offer from the cache by its product code.
   
  _getOfferFromCache(code) {
    return this.cache.get(code);
  }

  /**
   * Sets an offer in the cache by its product code.
   * 
   * @param {string} code The product code.
   * @param {Offer} offer The offer to set.
   */
  _setOfferInCache(code, offer) {
    this.cache.set(code, offer);
  }

  // Adds an offer to the manager.

  addOffer(productCode, type, value) {
    // Check if an offer already exists for the product code
    const existing = this._getOfferFromCache(productCode);
    if (existing) {
      // Update the existing offer
      existing.type = type;
      existing.value = value;
    } else {
      // Create a new offer
      const offer = new Offer(productCode, type, value);
      this._setOfferInCache(productCode, offer);
      // Add the offer to the database
      this.database.addOffer(offer);
    }
  }

  getOffer(productCode) {
    return this.database.getOffer(productCode);
  }
}

module.exports = OfferManager;