const Database = require('../../src/models/Database');
const OfferManager = require('../../src/services/OfferManager');

describe('OfferManager', () => {
  let database, offerManager;

  beforeEach(() => {
    database = new Database();
    offerManager = new OfferManager(database);
  });

  test('adds and retrieves offers', () => {
    offerManager.addOffer('R01', 'buy_one_get_one_half_price', 0.5);
    const offer = offerManager.getOffer('R01');
    expect(offer.type).toBe('buy_one_get_one_half_price');
    expect(offer.value).toBe(0.5);
  });

  test('returns undefined for non-existent offer', () => {
    expect(offerManager.getOffer('NONEXISTENT')).toBeUndefined();
  });
});